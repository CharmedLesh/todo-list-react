import { ITask } from '../../../interfaces/todo-list-module-interfaces';
import { Logger } from '../../../services/logger/logger';

type ID = string;

export const getTaskIndexById = (tasksList: ITask[], id: ID) => {
    try {
        // find the index of the task with the given id in array
        const taskIndex = tasksList.findIndex((task) => task.id === id);
        if (taskIndex === -1) {
            throw new Error(`Task with id ${id} not found.`);
        }
        return taskIndex;
    } catch (error) {
        if (error instanceof Error) {
            Logger.logError(error.message);
        }
    }
};
