import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import Profile from "./components/Profile";
import { dummyUser } from "./Data/userExample";
import General from "./pages/General";

function App() {
  
  return (
    <div className="w-full h-full bg-straw-100 flex font-montserrat">
      <Sidebar />
      <div className="bg-straw-100 w-full">
        <Navbar/>
        <General name={dummyUser.name}/>
      </div>
      <Profile name={dummyUser.name} title={dummyUser.title} href={dummyUser.userImg}/>
    </div>
  )
}

export default App
