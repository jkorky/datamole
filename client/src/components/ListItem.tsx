import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styles from "./ListItem.module.css";
import { Checkbox } from "./Checkbox";
import { Form } from "./form";

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className={styles.item}>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <label className={styles.label}>{label}</label>
            <button type="button">
                <TrashIcon />
            </button>
            {isEditing ? (
                <Form
                    initialValue={label}
                    onSubmit={(value) => {
                        onItemLabelEdit(value);
                        setIsEditing(false);
                    }}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <button type="button" onClick={() => setIsEditing(true)}>
                    <Pencil1Icon />
                </button>
            )}
        </div>
    );
};
