import { TodoListModule } from '../../modules/todo-list';

export const TodoListPage = () => {
    const $todoList = TodoListModule({ localStorageKey: 'EXAMPLE' });
    return $todoList;
};
