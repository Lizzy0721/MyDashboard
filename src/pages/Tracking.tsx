import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { typeOfTask } from "../types/taskType";
import { ChevronDown } from "lucide-react";
import Dropdown from "../components/Dropdown";

export default function Tracking (){
  //Dropdown Filter Logic
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = Object.values({ All: "all", ...typeOfTask });
  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
    setFilterVisible(!isFilterVisible);
  };

  return (
    <div className="w-full">
      <div className="w-full relative scroll-smooth grid-rows-4 bg-black">
        <div className="w-full h-screen bg-slate-300 flex flex-col gap-4">
          <Link to={":id"} className="text-lg font-semibold">
            Click Here
          </Link>
          <div
            onMouseEnter={() => setFilterVisible(!isFilterVisible)}
            onMouseLeave={() => setFilterVisible(!isFilterVisible)}
            className="p-2 w-[150px] rounded-lg border bg-white group hover:bg-slate-100 border-gray-400"
          >
            <div className="flex items-center justify-between group-hover:font-semibold">
              {selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)}{" "}
              <ChevronDown className="stroke-1 group-hover:stroke-2" />
            </div>
            {isFilterVisible && (
              <Dropdown
                handleSelectedCategory={handleSelectedCategory}
                categories={categories}
              />
            )}
          </div>
          <Outlet />
        </div>
        <div className="w-full h-screen bg-slate-400"></div>
        <div className="w-full h-screen bg-slate-500"></div>
        <div className="w-full h-screen bg-slate-600"></div>
      </div>
    </div>
  );
}