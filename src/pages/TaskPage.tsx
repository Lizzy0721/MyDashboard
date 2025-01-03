import { ChevronDown, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import TaskForm from "../components/Forms/TaskForm";
import { dummyData } from "../data/taskList";
import CardTask from "../components/Cards/CardTask";
import { taskType, typeOfTask } from "../types/taskType";
import Dropdown from "../components/Dropdown";
import useQueryParams from "../utils/useQueryParams";

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

  //Query Param
  const {
    getQueryParamByKey,
    setQueryParam,
  } = useQueryParams();

  const [selectedCategory, setSelectedCategory] = useState<string>(
    getQueryParamByKey("category") || "all"
  );

  useEffect(() => {
    setQueryParam("category", selectedCategory);
  }, [selectedCategory]);

  //Dropdown Filter Logic
  const [isFilterVisible, setFilterVisible] = useState(false);
  const categories = Object.values({ all: "all", ...typeOfTask });
  console.log(categories);
  const handleSelectedCategory = (category: string) => {
    setFilterVisible(!isFilterVisible);
    setSelectedCategory(category);
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
      <div
        onMouseEnter={() => setFilterVisible(!isFilterVisible)}
        onMouseLeave={() => setFilterVisible(!isFilterVisible)}
        className="p-2 w-[150px] rounded-lg border bg-white group hover:bg-slate-100 border-gray-400"
      >
        <div className="flex items-center justify-between group-hover:font-semibold">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}{" "}
          <ChevronDown className="stroke-1 group-hover:stroke-2" />
        </div>
        {isFilterVisible && (
          <Dropdown
            handleSelectedCategory={handleSelectedCategory}
            categories={categories}
          />
        )}
      </div>
      <div className="lg:grid grid-cols-3 grid-flow-row gap-3 space-y-3">
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
