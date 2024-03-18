import { useForm } from "react-hook-form";
import { FormData, UserSchema } from "@/types/SignUpFormSchema";
import FormField from "@components/FormField";
import { IoKey, IoKeyOutline, IoMail } from "react-icons/io5";
import { FaPhone, FaUser } from "react-icons/fa";
import { JobListContext } from "@/App";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const { jobList } = useContext(JobListContext);

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid col-auto space-y-4">
        <FormField
          type="text"
          placeholder="Username"
          name="username"
          register={register}
          error={errors.username}
          icon={<FaUser />}
        />
        <FormField
          type="tel"
          placeholder="Telephone"
          name="telephone"
          register={register}
          error={errors.telephone}
          icon={<FaPhone />}
        />
        <FormField
          type="select"
          placeholder="Job"
          name="job"
          register={register}
          error={errors.job}
          options={jobList.map((job) => ({ name: job.name, value: job.id }))}
        />
        <FormField
          type="select"
          placeholder="Area"
          name="area"
          register={register}
          error={errors.area}
          options={["Nord", "Sud", "Est", "Ouest"].map((area) => ({
            name: area,
            value: area,
          }))}
        />
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full"
        />
        <FormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
          icon={<IoMail />}
        />

        <FormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
          icon={<IoKey />}
        />

        <FormField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
          icon={<IoKeyOutline />}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
