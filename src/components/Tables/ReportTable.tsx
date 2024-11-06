import { dummyReports } from "../../Data/reportList";

export default function ReportTable(){
    return(
        <div className="w-full rounded-xl border-[3px] border-dark_moss_green-200 p-8 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-2xl">Report</h1>
                <button className="text-base bg-yellow-200 px-3 py-1 rounded-md text-amber-600 font-medium">View all</button>
            </div>
            <div className="w-full overflow-x-auto">
                <div className="table table-fixed md:w-full border-collapse text-center">
                    <div className="table-header-group border-b-2 border-dark_moss_green-200 text-dark_moss_green-300">
                        <div className="table-row">
                            <div className="table-cell p-3 pl-4 text-left">Name</div>
                            <div className="table-cell p-3">Total</div>
                            <div className="table-cell p-3">On Process</div>
                            <div className="table-cell p-3">Hold</div>
                            <div className="table-cell p-3">Completed</div>
                        </div>
                    </div>
                    <div className="table-row-group text-dark_moss_green-900">
                        {dummyReports.map((item) => 
                        <div key={item.id} className="table-row hover:bg-dark_moss_green-100">
                            <div className="table-cell py-3 pl-4 text-left font-bold">{item.name}</div>
                            <div className="table-cell py-3 font-medium">{item.total.toString().padStart(2, '0')}</div>
                            <div className="table-cell py-3 text-dark_moss_green-300">{item.onProcess.toString().padStart(2, '0')}</div>
                            <div className="table-cell py-3 text-dark_moss_green-300">{item.hold.toString().padStart(2, '0')}</div>
                            <div className="table-cell py-3 text-silver_lake_blue-700 font-semibold">{item.completed.toString().padStart(2, '0')}</div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}