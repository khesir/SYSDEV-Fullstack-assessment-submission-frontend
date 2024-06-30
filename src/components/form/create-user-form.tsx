
// TODO: Create a post request for users
// TODO: This is a form for users
import { useForm } from "react-hook-form";
import FormField from "./form-field";
import { FormData, ValidFieldNames } from "../../types/form-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../../schema";
import axios from "axios";

function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema)
  });
  
  const onSubmit = async (data: FormData) => {
    
    try{
        const response = await axios.post("http://localhost:3000/user",data)
        const { errors = {}} = response.data; // Destrcutive the 'errors' property from the response data
        
        // Find te first field with an error in the response data
        const fieldErrorMapping: Record<string, ValidFieldNames> ={
            first_name: "first_name",
            last_name: "last_name",
            email: "email",
            avatar: "avatar"
        };
        // Find the first field with an error in the response data
        const fieldWithError = Object.keys(fieldErrorMapping).find(
            (field) => errors[field]
        )

        // If a field with error is found, update the form error state using setError 
        if (fieldWithError){
            setError(fieldErrorMapping[fieldWithError], {
                type: "server",
                message: errors[fieldWithError],
            });
        }
    } catch (error){
        console.log(error)
    }
    
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[600px] p-5 bg-slate-100 rounded-sm">
            <h1 className="text-xl font-bold mb-4">
                Create user
            </h1>
            <div className="flex flex-col gap-y-3">
                <FormField
                    type="text"
                    placeholder="Email"
                    name="first_name"
                    title="Firstname"
                    register={register}
                    error={errors.first_name}
                />

                <FormField
                    type="text"
                    placeholder="GitHub URL"
                    name="last_name"
                    title="Lastname"
                    register={register}
                    error={errors.last_name}
                />

                <FormField
                    type="text"
                    placeholder="john.dog@gmail.com"
                    name="email"
                    title="Email"
                    register={register}
                    error={errors.email}
                />

                    
                <FormField
                    type="text"
                    placeholder="write n/a if no image"
                    name="avatar"
                    title="Image url"
                    register={register}
                    error={errors.avatar}
                />
            </div>
            <button type="submit" className="submit-button mt-5 bg-slate-800 px-4 py-1 text-md font-medium rounded-lg text-slate-200 hover:bg-slate-600">
                Submit
            </button>
        </div>
      </form>
  );
}

export default CreateUserForm;