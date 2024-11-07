import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import Profile from "./components/Profile";
import { dummyUser } from "./Data/userExample";
import { useState } from "react";

function App() {

  const [profileOpen, setProfileBar] = useState(false);
  const [sidebarOpen, setSidebar] = useState(false);

  const toggleProofile = () => {
      setProfileBar(!profileOpen)
  }

  const toggleSidebar = () => {
    setSidebar(!sidebarOpen);
  }
  
  return (
    <div className="w-screen min-h-screen bg-straw-100 flex font-montserrat">
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebar(false)}/>
      <div className={`lg:blur-none ${(sidebarOpen || profileOpen) ? 'blur-2xl' : 'blur-none'} bg-straw-100 w-full`}>
        <Navbar onclickMenu={toggleSidebar} onclicked={toggleProofile} profileImgRef={dummyUser.userImg}/>
        <Outlet />
      </div>
      <Profile name={dummyUser.name} title={dummyUser.title} href={dummyUser.userImg} isOpen={profileOpen} closeProfile={()=>setProfileBar(false)}/>
    </div>
  )
}

export default App
