import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import styles from "./Form.module.css";

import { Input } from "./Input";
import { Button } from "../Button";

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
        if (initialValue) {
            inputRef.current?.select();
        }
    }, [initialValue]);

    return (
        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputValue);
            }}
            onReset={() => {
                onCancel();
            }}
        >
            <Input ref={inputRef} value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <Button variant="default" type="submit" aria-label="Save">
                <CheckIcon />
            </Button>
            <Button variant="default" type="reset" aria-label="Cancel">
                <Cross1Icon />
            </Button>
        </form>
    );
};
