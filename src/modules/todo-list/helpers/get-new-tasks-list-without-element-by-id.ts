import { ITask } from '../../../interfaces/todo-list-module-interfaces';

type ID = string;

export const getNewTasksListWithoutElementById = (tasksList: ITask[], id: ID) => {
    const newTasksList = tasksList.filter((task) => {
        return task.id !== id;
    });

    return newTasksList;
};
