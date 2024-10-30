import { PencilLine } from "lucide-react";
import { useState } from "react";
import Dropdown from "../Dropdown";

export default function CardTask(){

    const [options, setOptions] = useState(false);

    const handleOptions = () => {
        setOptions(!options);
    };
    
    return(
        <div className="p-4 m-4 max-w-96 bg-silver_lake_blue-200 rounded-xl">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">
                    IniJudulTugasnya
                </h1>
                <button className="relative">
                    <PencilLine className="size-6 active:opacity-60" onClick={handleOptions}/>
                    {options && 
                        <Dropdown arrayOfOptions={["Edit","Delete"]} />
                    }
                </button>
            </div>
            <div className="text-lg space-x-2">
                <span>IniDeadlinenya</span>
                <span>IniTagStatusnya</span>
            </div>
            <details className="inline">
                <summary className="cursor-pointer hover:text-blue-900 hover:font-bold">More Details</summary>
                <p className="text-sm text-justify">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis dolor vitae habitant non at lacinia mus. Vulputate sit vestibulum netus placerat mattis malesuada torquent. Imperdiet lacus ad tellus, pharetra quis arcu vestibulum risus?
                </p>
            </details>
        </div>
    )
}