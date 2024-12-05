import { taskType, typeOfTask } from "../types/taskType";

export const dummyData: taskType[] = [
    {
        id: 1,
        title:"Baca Buku",
        description: "Harus baca minimal 5 halaman per hari. Biar ga terlalu berat.",
        date: "2024-11-30",
        type: typeOfTask.On_Process
    },
    {
        id: 2,
        title:"Buat ilustrasi sosmed",
        description: "Buat post ig. Warnanya harus cerah dan ceria.",
        date: "2024-11-09",
        type: typeOfTask.Pending
    },
] 