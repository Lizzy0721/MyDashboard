import { Plus } from "lucide-react";
import CardTask from "../components/card/CardTask";
import { useState } from "react";
import TaskForm from "../components/forms/TaskForm";

export default function TaskPage (){

    const [taskForm, setForm] = useState(false);

    const handleForm = () => {
        setForm(!taskForm);
    }

    return(
        <div className="w-full h-full bg-inherit p-8 space-y-7">
            <div className="w-full flex justify-between items-center">
                <p className="text-3xl font-black">Your Task List</p>
                {!taskForm &&
                    <button onClick={handleForm} className="flex justify-between items-center py-1.5 px-2 gap-2 rounded-md bg-yellow-200 text-yellow-700" >
                        <Plus className="size-5"/> <p className="font-medium">New Task</p>
                    </button>
                }
            </div>
            {taskForm && 
                <TaskForm handleForm={handleForm}/>
            }
            <div className="py-8">
                <CardTask/>
            </div>
        </div>
    )
}