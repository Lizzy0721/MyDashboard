import TheFormExample from "../components/Forms/TheFormExample";

export default function Tracking (){
    return(
        <div className="w-full">
            <div className="w-full relative scroll-smooth grid-rows-4 bg-black">
                <div className="w-full h-screen bg-slate-300">
                    <div className="bg-white rounded-lg border-4 border-silver_lake_blue-300 p-4">
                        <TheFormExample />
                    </div>
                </div>
                <div className="w-full h-screen bg-slate-400"></div>
                <div className="w-full h-screen bg-slate-500"></div>
                <div className="w-full h-screen bg-slate-600"></div>
            </div>
        </div>
    )
}