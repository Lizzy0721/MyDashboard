import { ChangeEvent, FormEvent, useState } from "react";
import { taskType, typeOfTask } from "../../types/taskType";

interface TaskFormProps {
    handleForm:()=>void;
    handleAddTask:(task: taskType) => void;
}

export default function TaskForm({handleForm, handleAddTask}:TaskFormProps){

    const initialInput: taskType = {
        id: 0,
        title: "",
        description: "",
        date: "",
        type: typeOfTask.On_Process
    }

    const [inputs, setInputs] = useState(initialInput);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Object.keys(inputs).forEach((dataInput) => {
            if(!dataInput.trim()) return;
        })
        handleAddTask(inputs);
        setInputs(initialInput);
    }

    //Validasi Form
    const [message, setMessage] = useState("");
    const handleInvalid = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title"){
            setMessage("Kependekan Euy");
        }
    };
    

    return(
        <div className="bg-white rounded-lg border-4 border-silver_lake_blue-300 p-4">
            <form onSubmit={handleSubmit} className="">
                <label className="text-xl font-semibold text-silver_lake_blue-700"
                >Title
                    <input
                        type="text"
                        name="title"
                        value={inputs.title || ""}
                        pattern=".{4,}"
                        required
                        onInvalid={handleInvalid}
                        onInput={()=>{setMessage("")}}
                        onChange={handleChange}
                        placeholder= "Kasih judul di sini euy" 
                        className="w-full rounded-lg bg-blue-50 p-2 text-base font-normal placeholder:text-silver_lake_blue-300"
                    /><p className="p-2 mb-7 text-sm font-thin text-red-500">{message}</p>
                </label>
                <label className="text-xl font-semibold text-silver_lake_blue-700"
                >Description
                    <input 
                        type="text"
                        name="details"
                        value={inputs.description || ""}
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