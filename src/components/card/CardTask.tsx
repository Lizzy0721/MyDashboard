import { PencilLine } from "lucide-react";
import { useRef, useState } from "react";
import Dropdown from "../Dropdown";
import { taskType } from "../../types/taskType";
import ClickedOutside from "../../utils/clickedOutside";

export default function CardTask({task} : {task: taskType}){

    const [options, setOptions] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleOptions = () => {
        setOptions(!options);
        console.log(options);
    };

    ClickedOutside(buttonRef, ()=>setOptions(false));
    
    return(
        <div className="p-4 m-4 h-fit bg-silver_lake_blue-200 rounded-xl">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">
                   {task.title}  
                </h1>
                <button ref={buttonRef} className="relative" >
                    <PencilLine className="size-6 active:opacity-60" onClick={handleOptions}/>
                    {options && 
                        <Dropdown arrayOfOptions={["Edit","Delete"]} />
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
        </div>
    )
}