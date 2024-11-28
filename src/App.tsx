import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import Profile from "./components/Profile";
import { dummyUser } from "./data/userExample";
import { useState } from "react";

function App() {
  const [isProfile, setProfile] = useState(false);
  const [isSidebar, setSidebar] = useState(false);

  const toggleProofile = () => {
    setProfile(!isProfile);
  };

  const toggleSidebar = () => {
    setSidebar(!isSidebar);
  };

  return (
    <div className="max-w-screen min-h-screen bg-straw-100 flex font-montserrat">
      <Sidebar isOpen={isSidebar} closeSidebar={() => setSidebar(false)} />
      <div
        className={`lg:blur-none ${
          isSidebar || isProfile ? "blur-2xl" : "blur-none"
        } bg-straw-100 w-full`}
      >
        <Navbar
          onclickMenu={toggleSidebar}
          onclicked={toggleProofile}
          profileImgRef={dummyUser.userImg}
        />
        <Outlet />
      </div>
      <Profile
        name={dummyUser.name}
        title={dummyUser.title}
        href={dummyUser.userImg}
        isOpen={isProfile}
        closeProfile={() => setProfile(false)}
      />
    </div>
  );
}

export default App;
