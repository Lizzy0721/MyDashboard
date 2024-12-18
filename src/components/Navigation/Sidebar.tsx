import { LayoutDashboard, ListTodo, MapPinHouse, Settings } from "lucide-react";
import Navbuttons from "../NavButton";
import { useRef } from "react";
import useClickedOutside from "../../utils/useClickedOutside";

export default function Sidebar({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean;
  closeSidebar: () => void;
}) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useClickedOutside(sidebarRef, closeSidebar);

  return (
    <div
      ref={sidebarRef}
      className={`${
        isOpen ? "flex" : "hidden"
      } lg:flex fixed z-50 lg:static min-w-56 min-h-full flex-col bg-white drop-shadow-md lg:drop-shadow-none lg:border-e-2 border-dark_moss_green-200 px-4`}
    >
      <div className="h-14 lg:h-[72px] flex items-center justify-center">
        <p className="text-2xl font-montserrat font-black text-dark_moss_green-700 italic">
          LOGOS
        </p>
      </div>
      <div className="text-dark_moss_green-400 font-bold font-montserrat text-sm">
        <Navbuttons isClicked={closeSidebar} linkref={"/"}>
          <LayoutDashboard />
          Beranda
        </Navbuttons>
        <Navbuttons isClicked={closeSidebar} linkref={"task"}>
          <ListTodo />
          Tasks List
        </Navbuttons>
        <Navbuttons isClicked={closeSidebar} linkref={"tracking"}>
          <MapPinHouse />
          Tracking
        </Navbuttons>
        <Navbuttons isClicked={closeSidebar} linkref={"settings"}>
          <Settings />
          Settings
        </Navbuttons>
      </div>
    </div>
  );
}
