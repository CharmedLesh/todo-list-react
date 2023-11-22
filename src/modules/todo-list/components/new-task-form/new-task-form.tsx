import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { CenteredTextInput } from '../../../../ui/inputs/centered-text-input/centered-text-input';
import { SingleIconButton } from '../../../../ui/buttons/single-icon-button/single-icon-button';
import styles from './new-task-form.module.scss';

interface INewTaskFormProps {
    onSubmitHandler: (event: SyntheticEvent, newTaskValue: string) => void;
}

export const NewTaskForm: FC<INewTaskFormProps> = (props) => {
    const [newTaskInputValue, setNewTaskInputValue] = useState('');
    const { onSubmitHandler } = props;

    const newTaskInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskInputValue(event.target.value);
    };

    const newTaskFormOnSubmitHandler = (event: SyntheticEvent) => {
        onSubmitHandler(event, newTaskInputValue);
        setNewTaskInputValue('');
    };

    return (
        <form autoComplete="off" className={styles.newTaskForm} onSubmit={newTaskFormOnSubmitHandler}>
            <div className={styles.newTaskInputContainer}>
                <CenteredTextInput
                    type="text"
                    spellCheck="false"
                    placeholder="what needs to be done?"
                    onChangeHandler={newTaskInputOnChangeHandler}
                    value={newTaskInputValue}
                />
            </div>
            <div className={styles.submitTaskButtonContainer}>
                <SingleIconButton icon="+" type="submit" />
            </div>
        </form>
    );
};
