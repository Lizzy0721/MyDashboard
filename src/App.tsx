import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import Profile from "./components/Profile";
import { dummyUser } from "./Data/userExample";
import { useState } from "react";

function App() {

  const [profileBar, setProfileBar] = useState(false);

  const handleProfileBar = () => {
      setProfileBar(!profileBar)
  }
  
  return (
    <div className="w-full h-screen bg-straw-100 flex font-montserrat">
      <Sidebar />
      <div className="bg-straw-100 w-full">
        <Navbar onclicked={handleProfileBar}/>
        <Outlet />
      </div>
      { profileBar &&
        <Profile name={dummyUser.name} title={dummyUser.title} href={dummyUser.userImg}/>
      }
    </div>
  )
}

export default App
