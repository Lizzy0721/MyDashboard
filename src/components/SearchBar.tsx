import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
        
    const [input, setInput] = useState("");

    return(
        <form className="w-full flex bg-white px-4 items-center rounded-xl border-[3px] border-dark_moss_green-200 cursor-pointer">
            <input
            type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder= "Search..."
            className= "grow outline-none p-2"
            />
            <Search className="right-0 z-10 static size-5 stroke-dark_moss_green-200"/>
        </form>
    )
}