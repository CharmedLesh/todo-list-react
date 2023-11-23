import { SyntheticEvent, FC, useState, useEffect } from 'react';
import { LocalStorage } from '../../services/localstorage/localstorage';
import { createNewTask } from './helpers/create-new-task';
import { getTaskIndexById } from './helpers/get-task-index-by-id';
import { getNewTasksListWithoutElementById } from './helpers/get-new-tasks-list-without-element-by-id';
import { ITask } from '../../interfaces/todo-list-module-interfaces';
import { Title } from './components/title/title';
import { NewTaskForm } from './components/new-task-form/new-task-form';
import { TasksList } from './components/tasks-list/tasks-list';

import styles from './index.module.scss';

interface ITodoListModuleProps {
    localStorageKey: string;
}

type ID = string;

export const TodoListModule: FC<ITodoListModuleProps> = (props) => {
    const { localStorageKey } = props;
    const localStorage = new LocalStorage<ITask[]>({ key: localStorageKey });

    const [tasksList, setTasksList] = useState<ITask[]>([]);
    const [areButtonsAndInputsDisabled, setAreButtonsAndInputsDisabled] = useState(false);

    // init taskList array
    useEffect(() => {
        const taskListFromLocalStorage = localStorage.get();
        if (taskListFromLocalStorage) {
            setTasksList(taskListFromLocalStorage);
        }
    }, []);

    const changeButtonsAndInputsDisabled = () => {
        setAreButtonsAndInputsDisabled((prevState) => !prevState);
    };

    const onNewTaskFormSubmitHandler = (event: SyntheticEvent, newTaskValue: string) => {
        event.preventDefault();

        // create new task and taskList objects
        const newTask: ITask = createNewTask(newTaskValue);
        const newTaskList = [...tasksList, newTask];
        // update state
        setTasksList(newTaskList);
        // update localstorage
        localStorage.set(newTaskList);
    };

    const onTaskCheckHandler = (id: ID) => {
        const taskIndex = getTaskIndexById(tasksList, id);
        if (taskIndex !== undefined) {
            // create a new array with the task at the found index, updating the isChecked property
            const updatedTasksList = [...tasksList];
            updatedTasksList[taskIndex].isChecked = !updatedTasksList[taskIndex].isChecked;
            // update state
            setTasksList(updatedTasksList);
            // update localstorage
            localStorage.set(updatedTasksList);
        }
    };

    const onTaskEditedHandler = (id: ID, newTitle: string) => {
        const taskIndex = getTaskIndexById(tasksList, id);
        if (taskIndex !== undefined) {
            // create a new array with the task at the found index, updating the title property
            const updatedTasksList = [...tasksList];
            updatedTasksList[taskIndex].title = newTitle;
            // update state
            console.log(updatedTasksList);
            setTasksList(updatedTasksList);
            // update localstorage
            localStorage.set(updatedTasksList);
        }
    };

    const onTaskRemoveHandler = (id: ID) => {
        const updatedTasksList = getNewTasksListWithoutElementById(tasksList, id);
        // update state
        setTasksList(updatedTasksList);
        // update localstorage
        localStorage.set(updatedTasksList);
    };

    return (
        <div className={styles.todoListModule}>
            <Title />
            <NewTaskForm
                onSubmitHandler={onNewTaskFormSubmitHandler}
                areButtonsAndInputsDisabled={areButtonsAndInputsDisabled}
            />
            <TasksList
                tasksList={tasksList}
                onTaskCheckHandler={onTaskCheckHandler}
                onTaskEditedHandler={onTaskEditedHandler}
                onTaskRemoveHandler={onTaskRemoveHandler}
                areButtonsAndInputsDisabled={areButtonsAndInputsDisabled}
                changeButtonsAndInputsDisabled={changeButtonsAndInputsDisabled}
            />
            <div>action buttons</div>
        </div>
    );
};
