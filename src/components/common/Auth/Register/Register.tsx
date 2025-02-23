import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "@ui/Input/Input.tsx";
import Button from "@ui/Button/Button.tsx";
import Title from "@ui/Title/Title.tsx";

import useRegisterValidationSchema from "@common/Auth/Register/hooks/useRegisterValidationSchema.ts";

export type RegisterFormDataTypes = z.infer<ReturnType<typeof useRegisterValidationSchema>>;

const Register = () => {
    const schema = useRegisterValidationSchema();

    const { control, handleSubmit } = useForm<RegisterFormDataTypes>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstname: "",
            username: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<RegisterFormDataTypes> = (data) => {
        const newData = { ...data }
        console.log(newData)
    }

    return (
        <form className="form" onSubmit={ handleSubmit(onSubmit) } noValidate>
            <Title variant="h1">☺️ Create an account</Title>
            <Input
                name="firstname"
                type="text"
                label="First name"
                placeholder="Enter your first name"
                control={control}
                autocomplete="firstname"
            />
            <Input
                name="username"
                type="text"
                label="User name"
                placeholder="Enter your user name"
                control={control}
                autocomplete="username"

            />
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
                autocomplete="password"
            />
            <Button type="submit">
                <span>
                    Get started
                </span>
            </Button>
        </form>
    );
};

export default Register;
