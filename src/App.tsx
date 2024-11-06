import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import Profile from "./components/Profile";
import { dummyUser } from "./Data/userExample";
import { useState } from "react";

function App() {

  const [profileBar, setProfileBar] = useState(false);
  const [sidebarOpen, setSidebar] = useState(false);

  const handleProfileBar = () => {
      setProfileBar(!profileBar)
  }

  const toggleSidebar = () => {
    setSidebar(!sidebarOpen);
  }
  
  return (
    <div className="w-screen min-h-screen bg-straw-100 flex font-montserrat">
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebar(false)}/>
      <div className={`${sidebarOpen ? 'blur-2xl' : 'blur-none'} bg-straw-100 w-full`}>
        <Navbar onclickMenu={toggleSidebar} onclicked={handleProfileBar} profileImgRef={dummyUser.userImg}/>
        <Outlet />
      </div>
      { profileBar &&
        <Profile name={dummyUser.name} title={dummyUser.title} href={dummyUser.userImg}/>
      }
    </div>
  )
}

export default App
