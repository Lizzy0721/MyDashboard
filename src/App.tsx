import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import Profile from "./components/Profile";
import { dummyUser } from "./Data/userExample";
import TasksList from "./pages/TaskPage";

function App() {
  
  return (
    <div className="w-full h-screen bg-straw-100 flex font-montserrat">
      <Sidebar />
      <div className="bg-straw-100 w-full">
        <Navbar/>
        <TasksList />
      </div>
      <Profile name={dummyUser.name} title={dummyUser.title} href={dummyUser.userImg}/>
    </div>
  )
}

export default App
