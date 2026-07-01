import { TodoItem } from "../types/todoItem";

export const sortTodoItems = (items: TodoItem[]): TodoItem[] => {
    return items.sort((a, b) => {
        if (a.isDone !== b.isDone) {
            return a.isDone ? 1 : -1;
        }
        return b.createdAt - a.createdAt;
    });
};
