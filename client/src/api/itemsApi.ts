import { TodoItem } from "../types/todoItem";
import { request } from "./httpClient";
const ITEMS_PATH = "/items";
export const fetchItems = () => request<TodoItem[]>(ITEMS_PATH);
export const createItem = (label: string) =>
    request<TodoItem>(ITEMS_PATH, {
        method: "POST",
        body: { label, isDone: false },
    });
export const updateItemLabel = (id: number, label: string) =>
    request<TodoItem>(`${ITEMS_PATH}/${id}`, {
        method: "PATCH",
        body: { label },
    });
export const markItemDone = (id: number) => request<TodoItem>(`${ITEMS_PATH}/${id}/done`, { method: "PATCH" });
export const markItemTodo = (id: number) =>
    request<TodoItem>(`${ITEMS_PATH}/${id}`, {
        method: "PATCH",
        body: { isDone: false, finishedAt: null },
    });
export const deleteItem = (id: number) => request<void>(`${ITEMS_PATH}/${id}`, { method: "DELETE" });
