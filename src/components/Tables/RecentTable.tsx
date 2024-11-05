import { dummyRecents } from "../../Data/recentList";
import { recentItems } from "../../types/recentItems"

function PrioritiesLabeled({priority}:Pick<recentItems, "priority">){
    const variants = {
        Low : 'w-fit py-1 px-4 rounded-md bg-silver_lake_blue-100 text-silver_lake_blue-500 font-medium',
        Medium : 'w-fit py-1 px-4 rounded-md bg-yellow-100 text-yellow-500',
        High : 'w-fit py-1 px-4 rounded-md bg-red-100 text-red-500',
    };
    
    return(
        <div className="w-full flex justify-center">
            <div className={`${variants[priority]} ...`}>
                {priority}
            </div>
        </div>
    );
}

export default function RecentTable(){
    return(
        <div className="table table-fixed w-full border-collapse">
            <div className="table-header-group text-dark_moss_green-300">
                <div className="table-row">
                    <div className="table-cell w-24 text-center">S.No</div>
                    <div className="table-cell w-52 text-left">Reported By</div>
                    <div className="table-cell w-72 text-left">Short Description</div>
                    <div className="table-cell w-32 text-center">Priority</div>
                    <div className="table-cell w-32 text-left">Created Date</div>
                </div>
            </div>
            <div className="table-row-group">
                {dummyRecents.map((item) =>
                <div className="table-row border-b-2 border-dark_moss_green-200">
                    <div className="table-cell py-3 text-center align-middle">{item.no.toString().padStart(2, '0')}</div>
                    <div className="table-cell py-3 text-left justify-start align-middle">
                        <div className="flex gap-3">
                            <img src={item.href} alt="" className="size-12 rounded-lg"/>
                            <div>
                                <p className="font-bold">{item.name}</p>
                                <p className="text-sm text-silver_lake_blue-200">{item.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="table-cell py-3 align-middle text-left">{item.desc}</div>
                    <div className="table-cell py-3 align-middle">
                        <PrioritiesLabeled priority={item.priority} />
                    </div>
                    <div className="table-cell py-3 align-middle text-left">{item.date}</div>
                </div>
                )}
            </div>
        </div>
    )
}