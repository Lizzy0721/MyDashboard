import { ReactNode } from "react";

function Navbuttons({ children }:{children: ReactNode}) {
    return (
        <button className="w-[10rem] flex items-center justify-start gap-x-2 py-3 px-4 text-base font-medium text-grass-300 bg-transparent rounded-md hover:bg-dark_moss_green-300 hover:text-straw-100 hover:font-bold active:bg-dark_moss_green-200">
            { children }
        </button>
    );
}
  
export default Navbuttons;