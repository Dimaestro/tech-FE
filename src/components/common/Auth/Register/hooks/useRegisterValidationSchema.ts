import { useMemo } from "react";
import { z } from "zod";

const useRegisterValidationSchema = () => {
    return useMemo(() => z.object({
        firstname: z.string()
            .min(2, {message: "The first name must be at least 2 characters"})
            .max(50, {message: "The first name can be at most 50 characters"}),
        username: z.string()
            .min(2, {message: "The user name must be at least 2 characters"})
            .max(50, {message: "The user name can be at most 50 characters"}),
        email: z.string().email({message: "Enter a correct email"}),
        password: z.string()
            .min(8, {message: "The password must be at least 8 characters"})
            .refine(
                (val) => /[A-Za-z]/.test(val),
                {message: "The password must contain letters"}
            )
            .refine(
                (val) => /\d/.test(val),
                {message: "The password must contain numbers"}
            )
            .refine(
                (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
                {message: "The password must contain a special character !@#$%^&*(),.?\":{}|<>"}
            )
    }), []);
};

export default useRegisterValidationSchema;
