import React, { useState } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { IconButton, InputAdornment, TextField, TextFieldVariants } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import styles from "./Input.module.scss";

interface IInput<T extends FieldValues> {
    variant?: TextFieldVariants,
    name: Path<T>,
    label: string,
    type?: React.HTMLInputTypeAttribute,
    placeholder?: string,
    control: Control<T>,
    autocomplete?: string
}

const Input = <T extends FieldValues>(
    {
        name,
        label,
        placeholder,
        type = "text",
        variant = "outlined",
        control,
        autocomplete
    }: IInput<T>
) => {
    const [showPassword, setShowPassword] = useState(false);
    const {field, fieldState: {invalid, error}} = useController({name, control})

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const isPasswordField = type === "password";

    return (
        (<TextField
            {...field}
            name={name}
            type={isPasswordField && showPassword ? "text" : type}
            label={label}
            variant={variant}
            placeholder={placeholder}
            className={styles.input}
            error={invalid}
            helperText={invalid ? error?.message : ""}
            autoComplete={autocomplete}
            slotProps={{
                input: {
                    endAdornment: isPasswordField && (
                        <InputAdornment position="end">
                            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }
            }}
        />)
    );
};

export default Input;
