import { forwardRef } from "react";
import styles from "./Input.module.css";

type InputProps = {
    value: string;
    onValueChange: (value: string) => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { value, onValueChange } = props;

    return (
        <input
            ref={ref}
            className={styles.input}
            value={value}
            onChange={(e) => {
                const value = e.currentTarget.value;
                onValueChange(value);
            }}
        />
    );
});

Input.displayName = "Input";
