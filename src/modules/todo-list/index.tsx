import { SyntheticEvent, FC, useState, useEffect } from 'react';
import { LocalStorage } from '../../services/localstorage/localstorage';
import { createNewTask } from './helpers/create-new-task';
import { ITask } from '../../interfaces/todo-list-module-interfaces';
import { NewTaskForm } from './components/new-task-form/new-task-form';
import { Title } from './components/title/title';
import styles from './index.module.scss';

interface ITodoListModuleProps {
    localStorageKey: string;
}

export const TodoListModule: FC<ITodoListModuleProps> = (props) => {
    const { localStorageKey } = props;
    const localStorage = new LocalStorage<ITask[]>({ key: localStorageKey });

    const [tasksList, setTasksList] = useState<ITask[]>([]);

    // init taskList array
    useEffect(() => {
        const taskListFromLocalStorage = localStorage.get();
        setTasksList(taskListFromLocalStorage ? taskListFromLocalStorage : []);
        console.log(tasksList);
    }, []);

    const onNewTaskFormSubmitHandler = (event: SyntheticEvent, newTaskValue: string) => {
        event.preventDefault();

        // create new task object
        const newTask: ITask = createNewTask(newTaskValue);
        // update state and invoke localstorage update
        setTasksList([...tasksList, newTask]);
    };

    return (
        <div className={styles.todoListModule}>
            <Title />
            <NewTaskForm onSubmitHandler={onNewTaskFormSubmitHandler} />
            <div>list</div>
            <div>action buttons</div>
        </div>
    );
};
