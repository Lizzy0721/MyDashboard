import { LogOut, PencilLine } from "lucide-react";
import Calendar from "react-calendar";
import CardTodo from "./card/CardTodo";

export default function Profile({href, name, title}:{href:string, name:string, title:string}){
    
    return(
        <div className="w-96 border-s-2 bg-inherit border-dark_moss_green-200 px-4 grid content-between">
            <div className="space-y-5">
                <div className="h-14 lg:h-[72px] flex items-center justify-center">
                    <p className="text-lg font-semibold text-dark_moss_green-500">Profile</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <img src={href} alt="" className="rounded-full size-24"/>
                    <p className="flex text-lg font-semibold">
                        {name}
                        &nbsp;
                        <button className="relative group">
                            <PencilLine className="size-4"/>
                            <div className="hidden group-hover:block w-10 bg-white rounded-sm drop-shadow-md absolute text-xs font-thin">
                                edit
                            </div>
                        </button>
                    </p>
                    <p className="text-xs">{title}</p>
                </div>
                <div className="py-4">
                    <div className="text-center ">
                        <Calendar/>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="font-bold">Currents To Dos</p>
                    <CardTodo percentage={50} Title={"Read Book"}/>
                    <CardTodo percentage={50} Title={"Read Book"}/>
                    <CardTodo percentage={50} Title={"Read Book"}/>
                </div>
            </div>
            <div className="justify-between items-center bg-dark_moss_green-200 text-dark_moss_green-700 p-3 flex rounded-md">
                <p>Log Out</p>
                <LogOut className="stroke-dark_moss_green-700"/>
            </div>
        </div>
    )
}