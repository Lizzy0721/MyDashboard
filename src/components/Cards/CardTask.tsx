import { PencilLine } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import Dropdown from "../Dropdown";
import { taskType } from "../../types/taskType";
import ClickedOutside from "../../utils/clickedOutside";

interface cardTask {
    task: taskType,
    handleDeleteTask: (id: number) => void;
    handleEditTask: (id: number, newTask: taskType) => void;
}

export default function CardTask({task, handleDeleteTask, handleEditTask} : cardTask){

    //Toggle the dropdown
    const [isOptions, setOptions] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleOptions = () => {
        setOptions(!isOptions);
    };
    ClickedOutside(buttonRef, ()=>setOptions(false));

    //Toggle Edit Field
    const [isEdit, setEdit] = useState(true);

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
    }

    //Handle Edit
    const handleSaveEdit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleEditTask(task.id, task);
    }

    //Temporary check
    const [title, setTitle] = useState(task.title);
    
    return(
        <form onSubmit={handleSaveEdit} className="p-4 m-4 h-fit bg-silver_lake_blue-200 rounded-xl">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">
                   {!isEdit ? task.title : (<input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>)}  
                </h1>
                <button ref={buttonRef} className="relative" >
                    <PencilLine className="size-6 active:opacity-60" onClick={handleOptions}/>
                    {isOptions && 
                        <Dropdown items={options} action={handleAction}/>
                    }
                </button>
            </div>
            <div className="text-lg space-x-2">
                <span>{task.date}</span>
                <span>{task.type}</span>
            </div>
            <details className="inline">
                <summary className="cursor-pointer hover:text-blue-900 hover:font-bold">More Details</summary>
                <p className="text-sm text-justify">
                    {task.details}
                </p>
            </details>
        </form>
    )
}