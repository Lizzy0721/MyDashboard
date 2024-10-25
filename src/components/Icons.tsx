import { ReactNode } from "react";

export default function Icons({ children }:{children: ReactNode}){
    return(
        <button className="rounded-full p-1 outline outline-2 outline-offset-2 outline-dark_moss_green-300 bg-dark_moss_green-200 text-dark_moss_green-500">
            {children}
        </button>
    )
}