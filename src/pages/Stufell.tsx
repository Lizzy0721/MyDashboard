import Navbar from "../components/Navigation/Navbar";

export default function Stufell (){
    return(
        <div className="w-full">
            <Navbar/>
            <div className="w-full relative scroll-smooth grid-rows-4 bg-black">
                <div className="w-full h-screen bg-slate-300"></div>
                <div className="w-full h-screen bg-slate-400"></div>
                <div className="w-full h-screen bg-slate-500"></div>
                <div className="w-full h-screen bg-slate-600"></div>
            </div>
        </div>
    )
}