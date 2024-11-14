import { ChevronRight } from "lucide-react";

export default function CardTodo({percentage, Title}:{percentage:number, Title:string}){
    return(
        <div className="w-full bg-dark_moss_green-300 text-dark_moss_green-900 p-3 flex rounded-md items-center justify-between">
            <div className="px-1 py-2 rounded-full border-2">
                {percentage}%
            </div>
            <div>
                <p className="font-medium">{Title}</p>
            </div>
            <div>
             <ChevronRight className="size-5 stroke-dark_moss_green-600"/>
            </div>
        </div>
    )
}