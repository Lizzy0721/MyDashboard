import { taskType, typeOfTask } from "../../types/taskType";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

//reference: https://github.com/cosdensolutions/code/tree/master/videos/long/react-hook-form-tutorial

interface TaskFormProps {
  handleForm: () => void;
  handleAddTask: (task: taskType) => void;
}

const schema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .min(4, { message: "Kependekan euy" }),
  description: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .min(10, { message: "Kependekan euy" }),
  deadline: z.coerce.date({
    required_error: "Please select a date",
    invalid_type_error: "Input the date. Nothing else",
  }),
});

type FormFields = z.infer<typeof schema>;

export default function TaskForm({ handleForm, handleAddTask }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      handleAddTask({
        id: Date.now(),
        title: data.title,
        description: data.description,
        date: format(data.deadline, "yyyy-MM-dd"),
        type: typeOfTask.On_Process,
      });

      alert("Form submitted succesfully!");

      handleForm();
    } catch (error) {
      console.error("Something occured:", error);
      setError("root", {
        message: "Something is wrong with the form. Check your inputs again!",
      });
      alert("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="task-form gap-4">
      <label className="task-form-label">
        Title
        <input
          {...register("title")}
          type="text"
          name="title"
          placeholder="What to do?"
          className="text-base font-normal bg-blue-50 focus:border-2 focus:border-silver_lake_blue-300"
        />
        {errors.title && (
          <div className="text-red-500 text-sm font-medium">
            {errors.title.message}{" "}
          </div>
        )}
      </label>
      <label className="task-form-label">
        Description
        <input
          {...register("description")}
          type="text"
          name="description"
          placeholder="Details please"
          className="text-base font-normal bg-blue-50 focus:border-2 focus:border-silver_lake_blue-300"
        />
        {errors.description && (
          <div className="text-red-500 text-sm font-medium">
            {errors.description.message}{" "}
          </div>
        )}
      </label>
      <label className="task-form-label">
        Deadline
        <input
          {...register("deadline")}
          type="date"
          name="deadline"
          min={format(new Date(), "yyyy-MM-dd")}
          className="text-base font-normal bg-blue-50"
        />
        {errors.deadline && (
          <div className="text-red-500 text-sm font-medium">
            {errors.deadline.message}{" "}
          </div>
        )}
      </label>
      <div className="w-full flex space-x-3 mt-10 justify-end">
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading ... " : "Save"}
        </button>
        <button
          onClick={handleForm}
          className="w-24 h-8 rounded-md border-2 border-silver_lake_blue-200 text-silver_lake_blue-700 font-bold"
        >
          Cancel
        </button>
      </div>
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
    </form>
  );
}
