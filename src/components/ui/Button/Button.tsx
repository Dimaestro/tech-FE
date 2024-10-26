import React from 'react';
import { Button as MuiButton } from '@mui/material';

import styles from "./Button.module.scss";

interface IButton {
    variant?: "contained" | "text" | "outlined",
    children: React.ReactNode,
    type?: "submit" | "reset" | "button",
    disabled?: boolean,
    onClick?: () => void
}

const Button: React.FC<IButton> = (
    {variant = "contained", children, onClick, type = "button", disabled = false}
) => {
    return (
        <MuiButton
            variant={variant}
            type={type}
            onClick={onClick}
            className={styles.button}
            disabled={disabled}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
