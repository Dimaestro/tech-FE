import {useMemo} from "react";
import { z } from 'zod';

const useSignInValidationSchema = () => {
    return useMemo(() => z.object({
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
}

export default useSignInValidationSchema;
