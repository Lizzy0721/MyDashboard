import { Plus } from "lucide-react";
import { useState } from "react";
import TaskForm from "../components/forms/TaskForm";
import { dummyData } from "../Data/taskList";
import CardTask from "../components/card/CardTask";
import { taskType } from "../types/taskType";

export default function TaskPage (){
    
    //Ini buat tutup buka formnya
    const [taskForm, setForm] = useState(false);
    const handleForm = () => {
        setForm(!taskForm);
    }

    //Ini buat nampilin datanya
    const [tasks, setTasks] = useState(dummyData);
    const handleAddTask = (task: taskType) => {
        setTasks(prevTasks => [
            {
                id: Date.now(),
                title: task.title,
                details: task.details,
                date: task.date,
                type: task.type,
            },
            ... prevTasks,
        ])
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
                <TaskForm handleForm={handleForm} handleAddTask={handleAddTask}/>
            }
            <div className="grid lg:grid-cols-3 grid-flow-col py-8">
                {
                    tasks.map(task =>
                        <CardTask 
                        key={task.id}
                        task={task} />
                    )
                }
            </div>
        </div>
    )
}