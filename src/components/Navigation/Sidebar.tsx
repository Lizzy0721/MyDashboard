import { LayoutDashboard, ListTodo, MapPinHouse, Settings } from "lucide-react";
import Navbuttons from "../Buttons";

export default function Sidebar(){
    return(
        <div className="hidden lg:flex lg:flex-col border-e-2 bg-inherit border-dark_moss_green-200 px-4">
            <div className="h-14 lg:h-[72px] flex items-center justify-between py-2 px-2">
                <p className="text-2xl font-montserrat font-black text-dark_moss_green-900 italic">LOGOS</p>
            </div>
            <br />
            <div className="text-dark_moss_green-400 font-bold font-montserrat text-sm space-y-3">
                <Navbuttons>
                    <LayoutDashboard/>
                    Beranda
                </Navbuttons>
                <Navbuttons>
                    <ListTodo/>
                    Tasks List
                </Navbuttons>
                <Navbuttons>
                    <MapPinHouse/>
                    Tracking
                </Navbuttons>
                <Navbuttons>
                    <Settings/>
                    Settings
                </Navbuttons>
            </div>
            <div>
                
            </div>
        </div>
    )
}