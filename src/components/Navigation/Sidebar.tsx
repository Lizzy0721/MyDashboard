import { LayoutDashboard, ListTodo, MapPinHouse, Settings } from "lucide-react";
import Navbuttons from "../Buttons";

export default function Sidebar({displayBar}:{displayBar:boolean}){

    return(
        <div className={`${displayBar ? 'flex' : 'hidden'} lg:flex fixed z-50 lg:static w-72 flex-col bg-white drop-shadow-md lg:drop-shadow-none lg:border-e-2 border-dark_moss_green-200 px-4`}>
            <div className="h-14 lg:h-[72px] flex items-center justify-center">
                <p className="text-2xl font-montserrat font-black text-dark_moss_green-700 italic">LOGOS</p>
            </div>
            <div className="text-dark_moss_green-400 font-bold font-montserrat text-sm">
                <Navbuttons linkref={"general"}>
                    <LayoutDashboard/>
                    Beranda
                </Navbuttons>
                <Navbuttons linkref={"task"}>
                    <ListTodo/>
                    Tasks List
                </Navbuttons>
                <Navbuttons linkref={"tracking"}>
                    <MapPinHouse/>
                    Tracking
                </Navbuttons>
                <Navbuttons linkref={"settings"}>
                    <Settings/>
                    Settings
                </Navbuttons>
            </div>
            <div>
                
            </div>
        </div>
    )
}