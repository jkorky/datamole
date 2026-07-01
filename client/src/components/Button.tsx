import React from "react";
import styles from "./Button.module.css";

type ButtonVariant = "emphasized" | "default";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    variant?: ButtonVariant;
};

export const Button = (props: ButtonProps) => {
    const { variant = "default", className, type = "button", ...rest } = props;

    const classNames = [styles.button, styles[variant], className].filter(Boolean).join(" ");

    return <button type={type} className={classNames} {...rest} />;
};
