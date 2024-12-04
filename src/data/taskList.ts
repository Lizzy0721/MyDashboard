import { taskType, typeOfTask } from "../types/taskType";

export const dummyData: taskType[] = [
    {
        id: 1,
        title:"Baca Buku",
        details: "Harus baca minimal 5 halaman per hari. Biar ga terlalu berat.",
        date: "2024-11-30",
        type: typeOfTask["On Process"]
    },
    {
        id: 2,
        title:"Buat ilustrasi sosmed",
        details: "Buat post ig. Warnanya harus cerah dan ceria.",
        date: "2024-11-09",
        type: typeOfTask["On Process"]
    },
] 