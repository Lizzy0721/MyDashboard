import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import Profile from "./components/Profile";
import { dummyUser } from "./Data/userExample";
import { useState } from "react";

function App() {

  const [profileBar, setProfileBar] = useState(false);
  const [sidebarDisplay, setSidebarDisplay] = useState(false);

  const handleProfileBar = () => {
      setProfileBar(!profileBar)
  }

  const handleSidebarDisplay = () => {
    setSidebarDisplay(!sidebarDisplay);
  }
  
  return (
    <div className="w-full h-full bg-straw-100 flex font-montserrat">
      <Sidebar displayBar={sidebarDisplay}/>
      <div className="bg-straw-100 w-full">
        <Navbar onclickMenu={handleSidebarDisplay} onclicked={handleProfileBar} profileImgRef={dummyUser.userImg}/>
        <Outlet />
      </div>
      { profileBar &&
        <Profile name={dummyUser.name} title={dummyUser.title} href={dummyUser.userImg}/>
      }
    </div>
  )
}

export default App
