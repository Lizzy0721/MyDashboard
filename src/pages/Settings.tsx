import Navbar from "../components/Navigation/Navbar";

export default function Settings (){
    return(
        <div className="w-full">
            <Navbar/>
            <div className="w-full h-screen relative scroll-smooth grid-rows-4">
                <div className="w-full h-screen bg-slate-300"></div>
                <div className="w-full h-screen bg-slate-400">
                    <h1>HI</h1>
                </div>
                <div className="w-full h-screen bg-slate-500"></div>
                <div className="w-full h-screen bg-slate-600"></div>
            </div>
        </div>
    )
}