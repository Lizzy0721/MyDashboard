import { add, eachDayOfInterval, endOfMonth, endOfWeek, format, getDay, isSameMonth, isToday, parse, startOfToday, startOfWeek } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
//source:https://github.com/VivekAlhat/Tailwind-Calendar

export default function MiniCalendar(){

    const today = startOfToday();
    const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
    const firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

    const daysInMonth = eachDayOfInterval(
        {start: startOfWeek(firstDayOfMonth),
         end:endOfWeek(endOfMonth(firstDayOfMonth))},
    );

    const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
        event.preventDefault();
        const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
        setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
    };
    
    const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
        event.preventDefault();
        const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
        setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
    };

    const days = ["M", "S", "S", "R", "K", "J", "S"];
    /*const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];*/

    const colStartClasses = [
        "",
        "col-start-2",
        "col-start-3",
        "col-start-4",
        "col-start-5",
        "col-start-6",
        "col-start-7",
      ];

    return(
        <div className="">
            <div className=" relative flex mb-4 justify-center items-center gap-x-4 text-lg font-semibold">
                <ChevronLeftIcon
                className="cursor-pointer size-4 rounded-full hover:bg-neutral-200"
                onClick={getPrevMonth}
                />
                {format(currMonth, "MMMM")}
                <ChevronRightIcon
                className="cursor-pointer size-4 rounded-full hover:bg-neutral-200"
                onClick={getNextMonth}
                />
            </div>
            <div className="grid grid-cols-7 gap-x-6 gap-y-2 place-items-center">
                {
                days.map((day, idx) => {
                    return (
                    <div key={idx} className="font-semibold">
                        {day}
                    </div>
                    );
                })}
                {daysInMonth.map((day, idx) => {
                    return (
                    <div key={idx} className={colStartClasses[getDay(day)]}>
                        <p
                        className={`cursor-pointer flex items-center justify-center size-6 rounded-full ${
                            isSameMonth(day, firstDayOfMonth) ? "text-gray-900" : "text-gray-300"
                        } ${!isToday(day) && " hover:bg-dark_moss_green-100"} ${
                            isToday(day) && "bg-silver_lake_blue-200 text-silver_lake_blue-700"
                        }`}
                        >
                        {format(day, "d")}
                        </p>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

/*
<div className="absolute grid grid-cols-3 justify-items-center bg-neutral-200 font-normal">
    {months.map((month, idx) => {
        return(
            <div key={idx} onClick={() => setCurrMonth(month)} className="cursor-pointer size-full p-2 border border-neutral-200 bg-white hover:bg-neutral-200 hover:font-semibold">
                {month}
            </div>
        )
    })}
</div>
*/