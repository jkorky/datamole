import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./global.css";
import { ListItem } from "./components/ListItem";

type TodoItem = {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
};

export const App = () => {
    const [items, setItems] = useState<TodoItem[]>([]);
    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then((response) => response.json())
            .then((data: TodoItem[]) => setItems(data));
    }, []);

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

    return (
        <Container>
            <Layout>
                <Header onItemAdd={handleAdd}>To Do app</Header>
                <List>
                    {items.map((item) => (
                        <ListItem
                            key={item.id}
                            label={item.label}
                            isDone={item.isDone}
                            onItemLabelEdit={() => {}}
                            onItemDoneToggle={() => {}}
                            onItemDelete={() => {}}
                        />
                    ))}
                </List>
                <Footer />
            </Layout>
        </Container>
    );
};
