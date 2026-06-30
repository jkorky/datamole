import React from "react";
import styles from "./Footer.module.css";

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = (props: FooterProps) => {
    const { todoItems = 0, doneItems = 0 } = props;

    return (
        <footer className={styles.footer}>
            Todo: {todoItems}
            Done: {todoItems}
        </footer>
    );
};
