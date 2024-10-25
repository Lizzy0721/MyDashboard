import { Circle, MoveUpRight } from "lucide-react";

function Details({total, subs, color}:{total:number, subs:string, color: 'yellow' | 'cream'}){

    const colorVariants = {
        yellow: 'size-[1em] fill-straw-500 stroke-none',
        cream: 'size-[1em] fill-bone-500 stroke-none',
    }

    return(
        <div className="flex items-center gap-3">
            <Circle className={`${colorVariants[color]} ...`}/>
            <p className="flex items-baseline text-xl font-semibold gap-1">{total}<p className="text-sm font-medium opacity-60">{subs}</p></p>
        </div>
    )
}

export default function Overview({name, totalUsed, totalAvail, color}:{name:string, totalUsed:number, totalAvail:number, color:'dark' | 'light'}){

    const colorVariants = {
        dark: 'bg-silver_lake_blue-300 p-4 rounded-xl w-full min-h-56 grid content-between text-alice_blue-900',
        light: 'bg-zomp-300 p-4 rounded-xl w-full min-h-56 grid content-between text-emerald-900',
    }

    return(
        <div className={`${colorVariants[color]} ...`}>
            <div className="flex justify-between items-center">
                <p className="font-semibold text-xl">{name}</p>
                <button className="rounded-full bg-straw-200 p-1"><MoveUpRight className="size-[1em] stroke-2"/></button>
            </div>
            <div>
                <Details total={totalUsed} subs={"used"} color={"yellow"}/>
                <Details total={totalAvail} subs={"available"} color={"cream"}/>
            </div>
        </div>
    )
}