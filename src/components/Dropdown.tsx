
interface theOptions {
    items: string[];
    action: (item:string) => void;
}

export default function Dropdown (theOptions: theOptions){
    return(
        <div className="absolute ml-4 w-40 bg-slate-50 rounded-lg shadow-md space-y-2 p-2">
            {theOptions.items.map((item) =>
                <button key={item} onClick={() => theOptions.action(item)} className="block size-full p-2 text-left rounded-lg hover:bg-yellow-100 hover:text-amber-600 hover:font-medium">
                    {item}
                </button>
            )}
        </div>
    )
}