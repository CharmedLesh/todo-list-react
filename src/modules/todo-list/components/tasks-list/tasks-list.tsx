import { FC } from 'react';
import { ITask } from '../../../../interfaces/todo-list-module-interfaces';
import { TasksListItem } from '../tasks-list-item/tasks-list-item';
import styles from './tasks-list.module.scss';

interface ITasksListProps {
    tasksList: ITask[];
    onTaskCheckHandler: (id: string) => void;
    onTaskEditedHandler: (id: ID, newTitle: string) => void;
    onTaskRemoveHandler: (id: ID) => void;
    areButtonsAndInputsDisabled: boolean;
    changeButtonsAndInputsDisabled: () => void;
}

type ID = string;

export const TasksList: FC<ITasksListProps> = (props) => {
    const {
        tasksList,
        onTaskCheckHandler,
        onTaskEditedHandler,
        onTaskRemoveHandler,
        areButtonsAndInputsDisabled,
        changeButtonsAndInputsDisabled
    } = props;

    const generateTasksListItems = () => {
        const $tasksListItems: JSX.Element[] = [];

        tasksList.forEach((task) => {
            const $taskListItem = (
                <TasksListItem
                    task={task}
                    key={task.id}
                    onTaskCheckHandler={onTaskCheckHandler}
                    onTaskEditedHandler={onTaskEditedHandler}
                    onTaskRemoveHandler={onTaskRemoveHandler}
                    areButtonsAndInputsDisabled={areButtonsAndInputsDisabled}
                    changeButtonsAndInputsDisabled={changeButtonsAndInputsDisabled}
                />
            );
            $tasksListItems.push($taskListItem);
        });

        return $tasksListItems;
    };

    return <ul className={styles.tasksList}>{generateTasksListItems()}</ul>;
};
