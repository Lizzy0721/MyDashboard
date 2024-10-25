import { Bell, Plus, Search, User } from "lucide-react";
import { useState } from "react";
import Icons from "../Icons";

export default function Navbar(){
    
    const [input, setInput] = useState("");

    return(
        <nav className="bg-inherit h-14 lg:h-[72px] gap-4 flex items-center justify-between py-3 px-4 sticky top-0 z-40 border-b-2 border-dark_moss_green-200">
            <div className="max-w-full flex items-center gap-x-4">
                <p className="text-2xl font-black text-dark_moss_green-900">Dashboard</p>
                <form className="w-full flex bg-white px-4 items-center rounded-xl border-[3px] border-dark_moss_green-200 cursor-pointer">
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder= "Search..."
                    className= "grow outline-none p-2"
                    />
                    <Search className="right-0 z-10 static size-5 stroke-dark_moss_green-200"/>
                </form>
            </div>
            <div className="max-w-full flex items-center justify-end gap-8">
                <button className="hidden w-full max-w-32 lg:flex items-center justify-between bg-yellow-300 py-1.5 px-3 gap-2 rounded-full font-medium text-yellow-700">
                    <Plus className="size-5"/>
                    <p>Add New</p>
                </button>
                <div>
                    <Bell className="fill-avocado-200 stroke-avocado-200 stroke-2"/>
                </div>
                <Icons>
                    <User/>
                </Icons>
            </div>
        </nav>
    )
}
