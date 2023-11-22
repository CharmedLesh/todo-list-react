import { v4 as uuidv4 } from 'uuid';
import { ITask } from '../../../interfaces/todo-list-module-interfaces';

export const createNewTask = (title: string): ITask => {
    return {
        id: uuidv4(),
        title: title,
        isChecked: false
    };
};
