import { FormEvent, useState } from "react";

interface newTaskType {
    title?: string;
    details?: string;
    date?:string;
    type?: 'Pending' | 'On Process' | 'Completed' | 'Hold';
}

export default function TaskForm({handleForm}:{handleForm:()=>void}){

    const [inputs, setInputs] = useState<newTaskType>({});

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputs);
    }

    return(
        <div className="bg-white rounded-lg border-4 border-silver_lake_blue-300 p-4">
            <form onSubmit={handleSubmit} className="">
                <label 
                    htmlFor="title" 
                    className="text-xl font-semibold text-silver_lake_blue-700"
                >Title</label>
                <input 
                    type="text"
                    name="title"
                    value={inputs.title || ""}
                    onChange={handleChange}
                    placeholder= "What to do?" 
                    className="w-full rounded-lg bg-blue-50 p-2 mb-7 placeholder:text-silver_lake_blue-300"
                />
                <label htmlFor="name" className="text-xl font-semibold text-silver_lake_blue-700">Description</label>
                <input 
                    name="name" 
                    placeholder= "Add more details as much as you like!" 
                    className="w-full rounded-lg bg-blue-50 p-2 mb-7 placeholder:text-silver_lake_blue-300"
                />
                <label htmlFor="dateInput" className="block text-xl font-semibold text-silver_lake_blue-700">Deadline</label>
                <input 
                    name="dateInput" 
                    type="date" 
                    className="ml-2 bg-blue-50"
                />
                <div className="w-full flex space-x-3 mt-10 justify-end">
                    <button type="submit" className="w-24 h-8 rounded-md bg-blue-200 text-silver_lake_blue-700 font-bold">
                        Save
                    </button>
                    <button onClick={handleForm} className="w-24 h-8 rounded-md border-4 border-silver_lake_blue-200 text-silver_lake_blue-700 font-bold">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}