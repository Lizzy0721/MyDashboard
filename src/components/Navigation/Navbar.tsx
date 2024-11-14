import { AlignLeft, Bell, Plus, Search} from "lucide-react";
import Icons from "../Icons";
import SearchBar from "../SearchBar";

interface NavbarProps{
    onclickMenu: () => void;
    onclicked:() => void;
    profileImgRef: string;
}

export default function Navbar({onclickMenu, onclicked, profileImgRef}: NavbarProps){

    return(
        <nav className="bg-inherit h-14 lg:h-[72px] gap-4 flex items-center justify-between py-3 px-4 sticky top-0 z-40 border-b-2 border-dark_moss_green-200">
            <div className="w-full flex items-center gap-x-4">
                <button onClick={onclickMenu} className="lg:hidden"><AlignLeft size={36} className="stroke-dark_moss_green-500"/></button>
                <button className="md:hidden">
                    <Search className="size-6 stroke-dark_moss_green-500"/>
                </button>
                <div className="hidden lg:block">
                    <SearchBar/>
                </div>
            </div>
            <div className="w-full flex items-center justify-end gap-8">
                <button className="hidden w-full max-w-32 lg:flex items-center justify-between bg-yellow-300 py-1.5 px-3 gap-2 rounded-full font-medium text-yellow-700">
                    <Plus className="size-5"/>
                    <p>Add New</p>
                </button>
                <div>
                    <Bell className="fill-dark_moss_green-500 stroke-dark_moss_green-500 stroke-2"/>
                </div>
                <Icons onclicked={onclicked} profileImgRef={profileImgRef}/>
            </div>
            <div className="absolute hidden w-full h-fit left-0 top-0 bg-blue-200 rounded-lg shadow-md p-4">
                <SearchBar/>
            </div>
        </nav>
    )
}
