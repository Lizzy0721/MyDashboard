import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

export default function TaskFormWithHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="bg-black">
      <form
        handleSelectedCategory=""
        className="tutorial gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                value.includes("@");
              }
              return true;
            },
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <div className="form-error">{errors.email.message}</div>
        )}
        <input
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <div className="form-error">{errors.password.message}</div>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : " Submit "}
        </button>
      </form>
    </div>
  );
}
