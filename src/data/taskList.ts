import { taskType, typeOfTask } from "../types/taskType";

export const dummyData: taskType[] = [
    {
        id: 1,
        title:"Read book",
        description: "There is five book to read, according to the list on your notes.",
        date: "2024-11-30",
        type: typeOfTask.on_process
    },
    {
        id: 2,
        title:"Create social media post",
        description: "Theme is holiday. Color pallete is yellow red white",
        date: "2024-11-09",
        type: typeOfTask.pending
    },
    {
        id: 3,
        title:"Write blog post",
        description: "Topic is the importance of time management.",
        date: "2024-12-05",
        type: typeOfTask.completed
    },
    {
        id: 4,
        title:"Plan vacation",
        description: "Choose destination and book flights.",
        date: "2024-12-10",
        type: typeOfTask.on_process
    },
    {
        id: 5,
        title:"Organize workshop",
        description: "Prepare materials and schedule speakers.",
        date: "2024-12-15",
        type: typeOfTask.hold
    },
    {
        id: 6,
        title:"Update resume",
        description: "Add recent job experience and skills.",
        date: "2024-11-25",
        type: typeOfTask.completed
    },
    {
        id: 7,
        title:"Review project proposal",
        description: "Ensure all requirements are met.",
        date: "2024-12-01",
        type: typeOfTask.on_process
    },
    {
        id: 8,
        title:"Grocery shopping",
        description: "Buy ingredients for the week’s meals.",
        date: "2024-11-27",
        type: typeOfTask.pending
    },
    {
        id: 9,
        title:"Exercise",
        description: "Follow the new workout plan.",
        date: "2024-12-03",
        type: typeOfTask.completed
    },
    {
        id: 10,
        title:"Research new software tools",
        description: "Evaluate options for project management.",
        date: "2024-12-07",
        type: typeOfTask.hold
    },
    {
        id: 11,
        title:"Prepare presentation",
        description: "Slides for the quarterly business review.",
        date: "2024-11-29",
        type: typeOfTask.pending
    },
    {
        id: 12,
        title:"Clean the house",
        description: "Do a deep clean before guests arrive.",
        date: "2024-12-06",
        type: typeOfTask.on_process
    }
];