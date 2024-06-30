import { FormFiledProps } from "../../types/form-types";

const FormField : React.FC<FormFiledProps> = ({
    type,
    placeholder,
    name,
    title,
    register,
    error,
    valueAsNumber
}) => (
    <div className="flex flex-col">
        <span className="text-sm font-semibold mb-2">{title}</span>
        <input
            className="px-3 py-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            type={type}
            placeholder={placeholder}
            {...register(name, {valueAsNumber})}
        />
        {error && <span className=" text-red-500 text-sm font-semibold">{error.message}</span>}
    </div>
);

export default FormField