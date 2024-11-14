import MiniCalendar from "../components/Calendars/MiniCalendar";

export default function Tracking (){
    return(
        <div className="w-full">
            <div className="w-full relative scroll-smooth grid-rows-4 bg-black">
                <div className="w-full h-screen bg-slate-300">
                    <MiniCalendar/>
                </div>
                <div className="w-full h-screen bg-slate-400"></div>
                <div className="w-full h-screen bg-slate-500"></div>
                <div className="w-full h-screen bg-slate-600"></div>
            </div>
        </div>
    )
}