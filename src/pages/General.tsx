import { ChevronDown } from "lucide-react";
import CardStats from "../components/Cards/CardStats";
import Overview from "../components/Cards/Overview";
import RecentTable from "../components/Tables/RecentTable";
import ReportTable from "../components/Tables/ReportTable";

export default function General ({name}:{name:string}){
    return(
        <div className="bg-inherit relative scroll-smooth p-8 space-y-8">
            <div className="w-full space-y-5 md:flex justify-between items-center py-5">
                <p className="text-3xl font-black">Welcome back, {name} 👋</p>
                <button className="flex justify-between items-center py-1.5 px-2 gap-2 rounded-md bg-yellow-200 text-yellow-700">
                    <p>Week</p>
                    <ChevronDown className="size-4"/>
                </button>
            </div>
            <div className="w-full m-[0_auto] grid m:grid-cols-2 lg:flex gap-4">
                <CardStats title="Pending Task" href="/assets/Avgust.jpeg" number={120}/>
                <CardStats title="On Process" href="/assets/Bkornblume.jpeg" number={120}/>
                <CardStats title="Resolved" href="/assets/Marcus.jpeg" number={120}/>
                <CardStats title="Hold Task" href="/assets/Yenisei.jpeg" number={120}/>
            </div>
            <div className="space-y-4 lg:flex gap-4">
                <ReportTable />
                <div className="w-full grid gap-5 p-8 content-between rounded-xl border-[3px] border-dark_moss_green-200">
                    <h1 className="font-semibold text-2xl">Overview of all Devices</h1>
                    <div className="w-full space-y-4 md:space-y-0 md:flex gap-4">
                        <Overview name="Laptop" totalUsed={20000} totalAvail={1455} color={"dark"}/>
                        <Overview name="Mobile Phone" totalUsed={20000} totalAvail={1455} color={"light"}/>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-x-auto py-8 px-4 space-y-6">
                <h1 className="font-semibold text-2xl">Recents Activities</h1>
                <RecentTable />
            </div>
        </div>
    )
}