import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  username: string;
  telephone: string;
  job: string;
  area: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type Option = {
  name: string;
  value: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  options?: Option[];
  icon?: React.ReactNode;
};

export type ValidFieldNames =
  | "username"
  | "telephone"
  | "job"
  | "area"
  | "email"
  | "password"
  | "confirmPassword";

export const UserSchema: ZodType<FormData> = z
  .object({
    username: z.string().min(3, { message: "Username is too short" }),
    telephone: z.string().min(8, { message: "Telephone is too short" }),
    job: z.string(),
    area: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });
