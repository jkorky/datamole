import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import styles from "./ListItem.module.css";
import { Checkbox } from "./Checkbox";
import { Form } from "./form";
import { Button } from "./Button";

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
        <div className={`${styles.item} ${isEditing ? styles.editing : ""}`}>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <label className={styles.label}>{label}</label>

            <div className={styles.actions}>
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
                    <>
                        <Button variant="default" aria-label="Delete todo item" onClick={() => onItemDelete()}>
                            <TrashIcon />
                        </Button>
                        <Button variant="default" aria-label="Edit todo item" onClick={() => setIsEditing(true)}>
                            <Pencil1Icon />
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};
