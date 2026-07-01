import { useEffect, useState, useMemo } from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./global.css";
import { ListItem } from "./components/ListItem";
import { TodoItem } from "./types/todoItem";
import { sortTodoItems } from "./utils/sortTodoItems";
import * as itemsApi from "./api/itemsApi";

export const App = () => {
    const [items, setItems] = useState<TodoItem[]>([]);

    useEffect(() => {
        itemsApi.fetchItems().then(setItems);
    }, []);

    const sortedItems = useMemo(() => sortTodoItems(items), [items]);

    const handleAdd = async (label: string) => {
        const trimmedLabel = label.trim();
        if (!trimmedLabel) return;

        const newItem = await itemsApi.createItem(trimmedLabel);
        setItems((prev) => [...prev, newItem]);
    };

    const handleEdit = async (id: number, label: string) => {
        const trimmedLabel = label.trim();
        if (!trimmedLabel) return;

        const updatedItem = await itemsApi.updateItemLabel(id, trimmedLabel);
        setItems((prev) => prev.map((item) => (item.id === id ? updatedItem : item)));
    };

    const handleDoneToggle = async (id: number, isDone: boolean | "indeterminate") => {
        if (typeof isDone !== "boolean") return;

        const updatedItem = isDone ? await itemsApi.markItemDone(id) : await itemsApi.markItemTodo(id);
        setItems((prev) => prev.map((item) => (item.id === id ? updatedItem : item)));
    };

    const handleDelete = async (id: number) => {
        await itemsApi.deleteItem(id);
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const todoCount = items.filter((item) => !item.isDone).length;
    const doneCount = items.filter((item) => item.isDone).length;

    return (
        <Container>
            <Layout>
                <Header onItemAdd={handleAdd}>To Do app</Header>
                <List>
                    {sortedItems.map((item) => (
                        <ListItem
                            key={item.id}
                            label={item.label}
                            isDone={item.isDone}
                            onItemLabelEdit={(label) => handleEdit(item.id, label)}
                            onItemDoneToggle={(isDone) => handleDoneToggle(item.id, isDone)}
                            onItemDelete={() => handleDelete(item.id)}
                        />
                    ))}
                </List>
                <Footer todoItems={todoCount} doneItems={doneCount} />
            </Layout>
        </Container>
    );
};
