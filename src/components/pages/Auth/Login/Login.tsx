import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import useLoginSchema from "@pages/Auth/Login/hooks/useLoginSchema.ts";

import Input from "@ui/Input/Input.tsx";
import Button from "@ui/Button/Button.tsx";
import Title from "@ui/Title/Title.tsx";

type LoginFormData = z.infer<ReturnType<typeof useLoginSchema>>;

const Login = () => {
    const schema = useLoginSchema();

    const {control, handleSubmit } = useForm<LoginFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<LoginFormData> = (data) => {
        const newData = {...data}
        console.log(newData)
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
