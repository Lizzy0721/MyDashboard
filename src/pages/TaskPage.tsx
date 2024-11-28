import { Plus } from "lucide-react";
import { useState } from "react";
import TaskForm from "../components/Forms/TaskForm";
import { dummyData } from "../data/taskList";
import CardTask from "../components/Cards/CardTask";
import { taskType } from "../types/taskType";

export default function TaskPage() {
  //Ini buat tutup buka formnya
  const [isFormOpen, setFormOpen] = useState(false);
  const handleForm = () => {
    setFormOpen(!isFormOpen);
  };

  //Load Data
  const [tasks, setTasks] = useState(dummyData);

  //Add Data
  const handleAddTask = (task: taskType) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: task.title,
        details: task.details,
        date: task.date,
        type: task.type,
      },
    ]);
  };

  //Delete Data
  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((tasks) => tasks.id !== id));
  };

  //Edit Data
  const handleEditTask = (newTask: taskType) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => 
        newTask.id === task.id
        ? {...task, ...newTask}
        : task
      )
    );
  };

  return (
    <div className="w-full bg-inherit relative scroll-smooth p-8 space-y-4">
      <div className="w-full space-y-4 m:space-y-0 m:flex justify-between items-center">
        <p className="text-3xl font-black">Your Task List</p>
        {!isFormOpen && (
          <button
            onClick={handleForm}
            className="flex justify-between items-center py-1.5 px-2 gap-2 rounded-md bg-yellow-200 text-yellow-700"
          >
            <Plus className="size-5" /> <p className="font-medium">New Task</p>
          </button>
        )}
      </div>
      {isFormOpen && (
        <TaskForm handleForm={handleForm} handleAddTask={handleAddTask} />
      )}
      <div className="grid lg:grid-cols-3 grid-flow-row py-8">
        {tasks.map((task) => (
          <CardTask
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
          />
        ))}
      </div>
    </div>
  );
}
