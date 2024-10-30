import { Plus } from "lucide-react";
import CardTask from "../components/card/CardTask";
import { useState } from "react";

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
                <div className="bg-white rounded-lg border-4 border-silver_lake_blue-300 p-4">
                    <form action="" className="">
                        <label htmlFor="name" className="text-xl font-semibold text-silver_lake_blue-700">Title</label>
                        <input id="name" placeholder= "What to do?" className="w-full rounded-lg bg-blue-50 p-2 mb-7 placeholder:text-silver_lake_blue-300"/>
                        <label htmlFor="name" className="text-xl font-semibold text-silver_lake_blue-700">Description</label>
                        <input id="name" placeholder= "Add more details as much as you like!" className="w-full rounded-lg bg-blue-50 p-2 mb-7 placeholder:text-silver_lake_blue-300"/>
                        <label htmlFor="dateInput" className="block text-xl font-semibold text-silver_lake_blue-700">Deadline</label>
                        <input id="dateInput" type="date" className="ml-2 bg-blue-50"/>
                        <div className="w-full flex space-x-3 mt-10 justify-end">
                            <button className="w-24 h-8 rounded-md bg-blue-200 text-silver_lake_blue-700 font-bold">
                                Save
                            </button>
                            <button onClick={handleForm} className="w-24 h-8 rounded-md border-4 border-silver_lake_blue-200 text-silver_lake_blue-700 font-bold">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            }
            <div className="py-8">
                <CardTask/>
            </div>
        </div>
    )
}