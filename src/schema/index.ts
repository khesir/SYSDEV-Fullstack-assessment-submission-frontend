import { z } from "zod";


export const UserSchema = z.object({
    first_name: z.string().min(2,{
        message:"Minimum 2 characters required"
    }),
    last_name: z.string().min(2,{
        message:"Minimum 2 characters required"
    }),
    email: z.string().email(),
    avatar: z.optional(z.string().min(2))
});