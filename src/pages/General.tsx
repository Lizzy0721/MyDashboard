import { ChevronDown } from "lucide-react";
import CardStats from "../components/card/CardStats";
import Overview from "../components/card/Overview";
import RecentTable from "../components/Tables/RecentTable";
import ReportTable from "../components/Tables/ReportTable";

export default function General ({name}:{name:string}){
    return(
        <div className="w-full bg-inherit flex flex-col relative scroll-smooth p-8 space-y-4">
            <div className="w-full flex justify-between items-center py-5">
                <p className="text-3xl font-black">Welcome back, {name} 👋</p>
                <button className="flex justify-between items-center py-1.5 px-2 gap-2 rounded-md bg-yellow-200 text-yellow-700">
                    <p>Week</p>
                    <ChevronDown className="size-4"/>
                </button>
            </div>
            <div className="w-full m-[0_auto] grid lg:flex gap-4">
                <CardStats Title="Pending Task" href="./src/assets/Avgust.jpeg" Number={120}/>
                <CardStats Title="On Process" href="./src/assets/Bkornblume.jpeg" Number={120}/>
                <CardStats Title="Resolved" href="./src/assets/Marcus.jpeg" Number={120}/>
                <CardStats Title="Hold Task" href="./src/assets/Yenisei.jpeg" Number={120}/>
            </div>
            <div className="w-full grid lg:flex gap-4">
                <ReportTable />
                <div className="w-full grid gap-5 p-8 content-between rounded-xl border-[3px] border-dark_moss_green-200">
                    <h1 className="font-semibold text-2xl">Overview of all Devices</h1>
                    <div className="w-full flex gap-4">
                        <Overview name="Laptop" totalUsed={20000} totalAvail={1455} color={"dark"}/>
                        <Overview name="Mobile Phone" totalUsed={20000} totalAvail={1455} color={"light"}/>
                    </div>
                </div>
            </div>
            <div className="w-full p-8 space-y-6">
                <h1 className="font-semibold text-2xl">Recents Activities</h1>
                <RecentTable />
            </div>
        </div>
    )
}