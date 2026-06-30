import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { Form } from "./form";
import { Button } from "./Button";

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children, onItemAdd } = props;
    const [isAdding, setIsAdding] = useState(false);

    return (
        <header className={styles.header}>
            <h1>{children}</h1>
            {isAdding ? (
                <Form
                    initialValue=""
                    onSubmit={(value) => {
                        onItemAdd(value);
                        setIsAdding(false);
                    }}
                    onCancel={() => setIsAdding(false)}
                />
            ) : (
                <Button variant="primary" onClick={() => setIsAdding(true)}>
                    <PlusIcon />
                </Button>
            )}
        </header>
    );
};
