import { LayoutDashboard, ListTodo, MapPinHouse, Settings } from "lucide-react";
import Navbuttons from "../Buttons";

export default function Sidebar(){
    return(
        <div className="hidden w-72 lg:flex lg:flex-col border-e-2 bg-inherit border-dark_moss_green-200 p-4">
            <div className="h-14 lg:h-[72px] flex items-center justify-between x-2">
                <p className="text-2xl font-montserrat font-black text-dark_moss_green-900 italic">LOGOS</p>
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
                <Navbuttons linkref={""}>
                    <MapPinHouse/>
                    Tracking
                </Navbuttons>
                <Navbuttons linkref={""}>
                    <Settings/>
                    Settings
                </Navbuttons>
            </div>
            <div>
                
            </div>
        </div>
    )
}