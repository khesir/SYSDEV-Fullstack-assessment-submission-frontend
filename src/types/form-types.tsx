import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
    first_name: string,
    last_name: string,
    email: string,
    avatar: string
}

export type FormFiledProps = {
    title: string,
    type: string,
    placeholder: string,
    name: ValidFieldNames,
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
}
 
export type ValidFieldNames =
| "first_name"
| "last_name"
| "email"
| "avatar"
