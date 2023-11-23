import { ChangeEvent, FC, useRef, useState } from 'react';
import { Logger } from '../../../../services/logger/logger';
import { ITask } from '../../../../interfaces/todo-list-module-interfaces';
import { CheckboxInput } from '../../../../ui/inputs/checkbox-input/checkbox-input';
import { SingleIconButton } from '../../../../ui/buttons/single-icon-button/single-icon-button';
import { NoStylesInput } from '../../../../ui/inputs/no-styles-input/no-styles-input';
import { EditIcon, RemoveIcon } from '../../../../ui/icons';
import styles from './tasks-list-item.module.scss';

type ID = string;

interface ITasksListItemProps {
    task: ITask;
    onTaskCheckHandler: (id: ID) => void;
    onTaskEditedHandler: (id: ID, newTitle: string) => void;
    onTaskRemoveHandler: (id: ID) => void;
    areButtonsAndInputsDisabled: boolean;
    changeButtonsAndInputsDisabled: () => void;
}

export const TasksListItem: FC<ITasksListItemProps> = (props) => {
    const {
        task,
        onTaskCheckHandler,
        onTaskRemoveHandler,
        onTaskEditedHandler,
        areButtonsAndInputsDisabled,
        changeButtonsAndInputsDisabled
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const [taskListItemInnerState, setTaskListItemInnerState] = useState<ITask>(task);
    // used to set conditional className on edit button container
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

    const onTaskInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskListItemInnerState({ ...taskListItemInnerState, title: event.target.value });
    };

    const onTaskInputBlurHandler = () => {
        try {
            if (!inputRef.current) {
                throw new Error('Input element not found.');
            }
            inputRef.current.focus();
        } catch (error) {
            if (error instanceof Error) {
                Logger.logError(error.message);
            }
        }
    };

    const onTaskEditClickButtonHandler = () => {
        try {
            if (!inputRef.current) {
                throw new Error('Input element not found.');
            }

            switch (inputRef.current.disabled) {
                case true:
                    changeButtonsAndInputsDisabled();
                    inputRef.current.disabled = false;
                    inputRef.current.focus();
                    setIsInputFocused(true);
                    break;
                case false:
                    endEditing();
                    break;
                default:
                    throw new Error('Unexpected error occured.');
            }
        } catch (error) {
            if (error instanceof Error) {
                Logger.logError(error.message);
            }
        }
    };

    const endEditing = () => {
        if (!inputRef.current) {
            throw new Error('Input element not found.');
        }
        if (taskListItemInnerState.title) {
            onTaskEditedHandler(taskListItemInnerState.id, taskListItemInnerState.title);
            changeButtonsAndInputsDisabled();
            inputRef.current.disabled = true;
            setIsInputFocused(false);
        } else {
            inputRef.current.focus();
        }
    };

    const inputOnKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            endEditing();
        }
    };

    const isEditButtonDisabled = isInputFocused ? false : areButtonsAndInputsDisabled ? true : false;

    const tasksListItemConditionalClassName = task.isChecked
        ? `${styles.tasksListItem} ${styles.tasksListItemChecked}`
        : styles.tasksListItem;

    const editButtonContainerConditionalClassName = isInputFocused
        ? `${styles.buttonContainer} ${styles.highlightedButtonContainer}`
        : styles.buttonContainer;

    return (
        <li className={tasksListItemConditionalClassName}>
            <CheckboxInput
                checked={task.isChecked}
                onChange={() => onTaskCheckHandler(task.id)}
                disabled={areButtonsAndInputsDisabled}
            />
            <NoStylesInput
                type="text"
                value={taskListItemInnerState.title}
                spellCheck="false"
                disabled={true}
                onBlur={onTaskInputBlurHandler}
                onChange={onTaskInputChangeHandler}
                ref={inputRef}
                onKeyUp={inputOnKeyUpHandler}
            />
            <div className={editButtonContainerConditionalClassName}>
                <SingleIconButton
                    icon={<EditIcon width={'16px'} height={'16px'} />}
                    onClick={onTaskEditClickButtonHandler}
                    disabled={isEditButtonDisabled}
                />
            </div>
            <div className={styles.buttonContainer}>
                <SingleIconButton
                    icon={<RemoveIcon width={'16px'} height={'16px'} />}
                    onClick={() => onTaskRemoveHandler(taskListItemInnerState.id)}
                    disabled={areButtonsAndInputsDisabled}
                />
            </div>
        </li>
    );
};
