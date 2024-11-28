import { PencilLine } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import Dropdown from "../Dropdown";
import { taskType } from "../../types/taskType";
import ClickedOutside from "../../utils/clickedOutside";

interface cardTask {
  task: taskType;
  handleDeleteTask: (id: number) => void;
  handleEditTask: (id: number, newTask: taskType) => void;
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
  ClickedOutside(buttonRef, () => setOptions(false));

  //Toggle Edit Field
  const [isEdit, setEdit] = useState(false);

  //Handle the option inside the dropdown
  const options = ["Edit", "Delete"];
  const handleAction = (option: string) => {
    if (option === "Edit") {
      console.log("Editing the task...");
      // Toggle edit field
      setEdit(true);
    } else if (option === "Delete") {
      console.log("Deleting the task...");
      // Handle delete
      handleDeleteTask(task.id);
    }
  };

  //Handle Edit
  const handleSaveEdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleEditTask(task.id, task);
  };

  return (
    <form
      onSubmit={handleSaveEdit}
      className="p-4 m-4 h-fit bg-silver_lake_blue-200 rounded-xl"
    >
      {isEdit ? (
        <input
          type="text"
          className="w-full text-base font-normal bg-blue-50 focus:border-2 focus:border-silver_lake_blue-300"
        />
      ) : (
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">{task.title}</h1>
          <button ref={buttonRef} className="relative">
            <PencilLine
              className="size-6 active:opacity-60"
              onClick={handleOptions}
            />
            {isOptions && <Dropdown items={options} action={handleAction} />}
          </button>
        </div>
      )}

      <div className="text-lg space-x-2">
        <span>{task.date}</span>
        <span>{task.type}</span>
      </div>
      {isEdit ? (
        <textarea
          className="w-full text-base font-normal bg-blue-50 focus:border-2 focus:border-silver_lake_blue-300"
        />
      ) : (
      <details className="inline">
        <summary className="cursor-pointer hover:text-blue-900 hover:font-bold">
          More Details
        </summary>
        <p className="text-sm text-justify">{task.details}</p>
      </details> )}
      {isEdit && (
        <div className="w-full flex space-x-3 mt-10 justify-end">
          <button type="submit">{isEdit ? "Loading ... " : "Save"}</button>
          <button
            onClick={() => setEdit(false)}
            className="w-24 h-8 rounded-md border-2 border-silver_lake_blue-200 text-silver_lake_blue-700 font-bold"
          >
            Cancel
          </button>
        </div>
      )}
    </form>
  );
}
