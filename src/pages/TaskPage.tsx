import { ChevronDown, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import TaskForm from "../components/Forms/TaskForm";
import { dummyData } from "../data/taskList";
import CardTask from "../components/Cards/CardTask";
import { taskType, typeOfTask } from "../types/taskType";
import Dropdown from "../components/Dropdown";

export default function TaskPage() {
  //Ini buat tutup buka formnya
  const [isFormOpen, setFormOpen] = useState(false);
  const handleForm = () => {
    setFormOpen(!isFormOpen);
  };

  //Load Data
  const [tasks, setTasks] = useState(() => {
    const savedTasks: taskType[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    return savedTasks.length > 0 ? savedTasks : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Dropdown Filter Logic
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = Object.values({ All: "all", ...typeOfTask });
  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
    setFilterVisible(!isFilterVisible);
  };

  //Dropdown Sorting Logic
  const [isSortsVisible, setSortsVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState("date");
  const sorts = [
    "A-Z",
    "Z-A",
    "Terbaru",
    "Terlama",
    "Deadline Terdekat",
    "Deadline Terlama",
  ];
  //https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
  const handleSelectedSort = (sort: string) => {
    setSelectedSort(sort);
    setSortsVisible(!isSortsVisible);
  };

  //Add Data
  const handleAddTask = (task: taskType) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: task.title,
        description: task.description,
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
        newTask.id === task.id ? { ...task, ...newTask } : task
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
      <div className="m:flex justify-between space-y-3 m:space-y-0">
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
        <div
          onMouseEnter={() => setSortsVisible(!isSortsVisible)}
          onMouseLeave={() => setSortsVisible(!isSortsVisible)}
          className="p-2 w-[150px] rounded-lg border bg-white group hover:bg-slate-100 border-gray-400"
        >
          <div className="flex items-center justify-between group-hover:font-semibold">
            {selectedSort.charAt(0).toUpperCase() + selectedSort.slice(1)}{" "}
            <ChevronDown className="stroke-1 group-hover:stroke-2" />
          </div>
          {isSortsVisible && (
            <Dropdown
              handleSelectedCategory={handleSelectedSort}
              categories={sorts}
            />
          )}
        </div>
      </div>
      <div className="lg:grid grid-cols-3 grid-flow-row py-8 space-y-3">
        {selectedCategory === "all" &&
          tasks.map((task) => (
            <CardTask
              key={task.id}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleEditTask={handleEditTask}
            />
          ))}
        {selectedCategory !== "all" &&
          tasks
            .filter((task) => task.type.toString() === selectedCategory)
            .map((filteredTask) => (
              <CardTask
                key={filteredTask.id}
                task={filteredTask}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
              />
            ))}
      </div>
    </div>
  );
}
