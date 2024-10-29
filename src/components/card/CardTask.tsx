import { PencilLine } from "lucide-react";
import { useState } from "react";
import Dropdown from "../Dropdown";

export default function CardTask(){

    const [Details, setDetails] = useState(false);
    const [options, setOptions] = useState(false);
    
    const handleDetails = () => {
        setDetails(!Details);
    };

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
            {Details && 
                <p className="text-sm text-justify">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis dolor vitae habitant non at lacinia mus. Vulputate sit vestibulum netus placerat mattis malesuada torquent. Imperdiet lacus ad tellus, pharetra quis arcu vestibulum risus?
                </p>
            }
            <button className="text-sm underline mt-5 opacity-60 hover:opacity-100 active:opacity-100" onClick={handleDetails}>
                More Details
            </button>
        </div>
    )
}