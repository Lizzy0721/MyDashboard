import { EllipsisVertical } from "lucide-react";
import { useRef, useState } from "react";
import Dropdown from "../Dropdown";
import { taskType, typeOfTask } from "../../types/taskType";
import useClickedOutside from "../../utils/useClickedOutside";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface cardTask {
  task: taskType;
  handleDeleteTask: (id: number) => void;
  handleEditTask: (newTask: taskType) => void;
}

export default function CardTask({
  task,
  handleDeleteTask,
  handleEditTask,
}: cardTask) {
  //Toggle the dropdown
  const [isOptions, setOptions] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleOptions = () => {
    setOptions(!isOptions);
  };

  useClickedOutside(buttonRef, () => setOptions(false));

  //Toggle Edit Field
  const [isEdit, setEdit] = useState(false);

  //Set Up Hook Form
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
    deadline: z.string({ message: "Please select a date" }),
    type: z.nativeEnum(typeOfTask),
  });
  type FormFields = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({
    defaultValues: {
      ...task,
      deadline: format(new Date(task.date), "yyyy-MM-dd"),
    },
    resolver: zodResolver(schema),
  });

  //Handle the option inside the dropdown
  const options = ["Edit", "Delete"];
  const handleAction = (option: string) => {
    if (option === "Edit") {
      console.log("Editing the task...");
      // Toggle edit field
      setEdit(true);
      reset({
        ...task,
        deadline: format(new Date(task.date), "yyyy-MM-dd"), // Ensure correct format
      });
    } else if (option === "Delete") {
      console.log("Deleting the task...");
      // Handle delete
      handleDeleteTask(task.id);
    }
  };

  //Handle Edit
  const onSubmit = async (data: FormFields) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      handleEditTask({
        id: task.id,
        title: data.title,
        description: data.description,
        date: data.deadline,
        type: data.type,
      });
      setEdit(false);
    } catch (error) {
      console.error("Something occured:", error);
      setError("root", {
        message: "Something is wrong with the form. Check your inputs again!",
      });
      alert("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 m-4 w-full shadow-md border-l-8 border-silver_lake_blue-500 bg-white rounded-xl flex flex-col gap-y-2"
    >
      {isEdit ? (
        //Edit
        <>
          <input
            {...register("title")}
            type="text"
            className="w-full p-2 text-base font-normal bg-blue-50 focus:border-2 focus:border-silver_lake_blue-300"
          />
          {errors.title && (
            <div className="text-red-500 text-sm">{errors.title.message}</div>
          )}
          <div className="text-lg space-x-2">
            <input
              {...register("deadline")}
              type="date"
              min={format(new Date(), "yyyy-MM-dd")}
              className="p-2 text-base font-normal bg-blue-50"
            />
            <select
              {...register("type")}
              className="p-2 text-base font-normal bg-blue-50"
            >
              {Object.values(typeOfTask).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <textarea
            {...register("description")}
            className="w-full p-2 text-base font-normal bg-blue-50 focus:border-2 focus:border-silver_lake_blue-300"
          />
          {errors.description && (
            <div className="text-red-500 text-sm">
              {errors.description.message}
            </div>
          )}
          <div className="w-full flex space-x-3 mt-10 justify-end">
            <button
              type="submit"
              className="w-24 h-8 rounded-md bg-silver_lake_blue-700 text-silver_lake_blue-200 font-bold"
            >
              {isSubmitting ? "Loading ... " : "Save"}
            </button>
            <button
              onClick={() => setEdit(false)}
              className="w-24 h-8 rounded-md border-2 border-silver_lake_blue-700 text-silver_lake_blue-700 font-bold"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        //View
        <>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">{task.title}</h1>
            <button ref={buttonRef} className="relative">
              <EllipsisVertical
                className="size-5 active:opacity-60"
                onClick={handleOptions}
              />
              {isOptions && <Dropdown items={options} action={handleAction} />}
            </button>
          </div>
          <details className="inline">
            <summary className="cursor-pointer text-silver_lake_blue-700 hover:text-blue-900 hover:font-bold">
              More Details
            </summary>
            <p className="text-sm text-justify">{task.description}</p>
          </details>
          <hr />
          <div className="space-x-2">
            <span>{task.date}</span>
            <span>{task.type}</span>
          </div>
        </>
      )}
    </form>
  );
}
