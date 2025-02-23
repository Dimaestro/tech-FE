import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "@ui/Input/Input.tsx";
import Button from "@ui/Button/Button.tsx";
import Title from "@ui/Title/Title.tsx";

import useLoginValidationSchema from "@common/Auth/Login/hooks/useLoginValidationSchema.ts";

export type LoginFormDataTypes = z.infer<ReturnType<typeof useLoginValidationSchema>>;

const Login = () => {
    const schema = useLoginValidationSchema();

    const {control, handleSubmit } = useForm<LoginFormDataTypes>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<LoginFormDataTypes> = (data) => {
        const newData = {...data}
        console.log(newData)
    }

    return (
        <form className="form" onSubmit={ handleSubmit(onSubmit) } noValidate>
            <Title variant="h1">👋🏻 Welcome back</Title>
            <Input
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                control={control}
                autocomplete="email"
            />
            <Input
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                control={control}
                autocomplete="current-password"
            />
            <Button type="submit">
                <span>Sign In</span>
            </Button>
        </form>
    );
};

export default Login;
