import { FormEvent, useState } from "react";
import { taskType } from "../../types/taskType";

export default function TaskForm({handleForm}:{handleForm:()=>void}){

    const initialInput: taskType = {
        title: "",
        details: "",
        date: "",
        type: "On Process"
    }

    const [inputs, setInputs] = useState(initialInput);

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
        setInputs(initialInput);
    }

    return(
        <div className="bg-white rounded-lg border-4 border-silver_lake_blue-300 p-4">
            <form onSubmit={handleSubmit} className="">
                <label className="text-xl font-semibold text-silver_lake_blue-700"
                >Title
                    <input 
                        type="text"
                        name="title"
                        value={inputs.title || ""}
                        onChange={handleChange}
                        placeholder= "Kasih judul di sini euy" 
                        className="w-full rounded-lg bg-blue-50 p-2 mb-7 text-base font-normal placeholder:text-silver_lake_blue-300"
                    />
                </label>
                <label className="text-xl font-semibold text-silver_lake_blue-700"
                >Desription
                    <input 
                        type="text"
                        name="details"
                        value={inputs.details || ""}
                        onChange={handleChange}
                        placeholder= "Kasih deskripsi di sini euy"
                        className="w-full rounded-lg bg-blue-50 p-2 mb-7 text-base font-normal placeholder:text-silver_lake_blue-300"
                    />
                </label>
                <label className="text-xl font-semibold text-silver_lake_blue-700"
                >Deadline
                    <br />
                    <input 
                        type="date"
                        name="date"
                        value={inputs.date || ""}
                        onChange={handleChange}
                        className="rounded-lg bg-blue-50 p-2 mb-7 text-base font-normal"
                    />
                </label>
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

/* I wish I could use this
{["title","details"].map((item)=>
                    <label className="text-xl font-semibold text-silver_lake_blue-700"
                    >{item}
                        <input 
                            type="text"
                            name={item}
                            value={inputs[item as keyof typeof inputs] || ""}
                            onChange={handleChange}
                            placeholder= "Type here" 
                            className="w-full rounded-lg bg-blue-50 p-2 mb-7 text-base font-normal placeholder:text-silver_lake_blue-300"
                        />
                    </label>
                )}
*/