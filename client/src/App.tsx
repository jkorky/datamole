import { useEffect, useState, useMemo } from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./global.css";
import { ListItem } from "./components/ListItem";
import { TodoItem } from "./types/todoItem";

export const App = () => {
    const [items, setItems] = useState<TodoItem[]>([]);
    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then((response) => response.json())
            .then((data: TodoItem[]) => setItems(data));
    }, []);

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            if (a.isDone !== b.isDone) {
                return a.isDone ? 1 : -1;
            }
            return b.createdAt - a.createdAt;
        });
    }, [items]);

    const handleAdd = async (label: string) => {
        const trimmedLabel = label.trim();
        if (!trimmedLabel) return;
        const response = await fetch("http://localhost:3000/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                label: trimmedLabel,
                isDone: false,
            }),
        });
        const newItem: TodoItem = await response.json();
        setItems((prev) => [...prev, newItem]);
    };

    const handleEdit = async (id: number, label: string) => {
        const trimmedLabel = label.trim();
        if (!trimmedLabel) return;

        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ label: trimmedLabel }),
        });

        const updatedItem: TodoItem = await response.json();
        setItems((prev) => prev.map((item) => (item.id === id ? updatedItem : item)));
    };

    const handleDoneToggle = async (id: number, isDone: boolean | "indeterminate") => {
        if (typeof isDone !== "boolean") return;

        const response = isDone
            ? await fetch(`http://localhost:3000/items/${id}/done`, { method: "PATCH" })
            : await fetch(`http://localhost:3000/items/${id}`, {
                  method: "PATCH",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ isDone: false, finishedAt: null }),
              });

        const updatedItem: TodoItem = await response.json();
        setItems((prev) => prev.map((item) => (item.id === id ? updatedItem : item)));
    };

    const handleDelete = async (id: number) => {
        await fetch(`http://localhost:3000/items/${id}`, {
            method: "DELETE",
        });
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
