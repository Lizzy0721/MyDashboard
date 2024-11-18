import { ChangeEvent, FormEvent, useState } from "react";
import { taskType } from "../../types/taskType";
import { errorTaskType } from "../../types/errorTaskType";

interface TaskFormProps {
    handleForm:()=>void;
    handleAddTask:(task: taskType) => void;
}

export default function TaskForm({handleForm, handleAddTask}:TaskFormProps){

    //Initiate the temporary container for inputs
    const initialInput: taskType = {
        id: 0,
        title: "",
        details: "",
        date: "",
        type: "On Process",
    }
    const [inputs, setInputs] = useState(initialInput);

    //Initiate temporary container for error
    const initialError: errorTaskType = {
        title: "",
        details: "",
        date: "",
    }
    const [formErrors, setFormErrors] = useState(initialError); 

    //event handler for each input
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setInputs(prevState => ({...prevState, [name]: value}));
        if(name === "title" && value.length < 3){
            if(value.trim() === ""){
                setFormErrors((prevState) => ({
                    ...prevState,
                    title: "Title cannot be empty or contain only spaces.",
                }));
            } else {
                setFormErrors((prevState) => ({
                    ...prevState,
                    title: "Title must be at least 4 characters long.",
                }));
            }
        } else if (name === "details" && value.length < 10) {
            if(value.trim() === ""){
                setFormErrors((prevState) => ({
                    ...prevState,
                    details: "Description cannot be empty or contain only spaces.",
                }));
            } else {
                setFormErrors((prevState) => ({
                    ...prevState,
                    details: "Description must be at least 10 characters long.",
                }));
            }
        } else if (name === "date" && value === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                date: "Date cannot be empty.",
            }));
        } else {
            setFormErrors((prevState) => ({
                ...prevState,
                [name]: "", // Reset error message
            }));
        }
    };

    //event hanlder for submit form
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Final validation check
        const isFormValid = Object.values(formErrors).every((error) => error === "");

        if (isFormValid) {
            // Form submission logic
            alert("Form submitted successfully!");
            //Input form
            handleAddTask(inputs);
            // Reset the form
            setInputs(initialInput);
            //Reset Error
            setFormErrors(initialError);
        } else {
            alert("Form contains validation errors.");
        }
    }
    
    return(
        <div className="bg-white rounded-lg border-4 border-silver_lake_blue-300 p-4">
            <form onSubmit={handleSubmit} className="">
                <div className="my-3">
                    <label 
                    htmlFor="title"
                    className="text-xl font-semibold text-silver_lake_blue-700"
                    >Title</label>
                    <input
                        type="text"
                        id = "title"
                        name= "title"
                        value={inputs.title}
                        onChange={handleChange}
                        placeholder= "Kasih judul di sini euy" 
                        className="w-full rounded-lg bg-blue-50 p-2 text-base font-normal placeholder:text-silver_lake_blue-300"
                    />
                    {formErrors.title && <p className="text-red-400">{formErrors.title}</p>}
                </div>
                <div className="my-3">
                    <label className="text-xl font-semibold text-silver_lake_blue-700"
                    >Description</label>
                    <input 
                        type="text"
                        id = "details"
                        name="details"
                        value={inputs.details || ""}
                        onChange={handleChange}
                        placeholder= "Kasih deskripsi di sini euy"
                        className="w-full rounded-lg bg-blue-50 p-2 text-base font-normal placeholder:text-silver_lake_blue-300"
                    />
                    {formErrors.details && <p className="text-red-400">{formErrors.details}</p>}
                </div>
                <div>
                    <label className="text-xl font-semibold text-silver_lake_blue-700"
                    >Deadline</label>
                    <br />
                    <input 
                        type = "date"
                        id = "date"
                        name = "date"
                        value={inputs.date || ""}
                        onChange={handleChange}
                        className="rounded-lg bg-blue-50 p-2 mb-7 text-base font-normal"
                    />
                    {formErrors.date && <p className="text-red-400">{formErrors.date}</p>}
                </div>
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

//{errors.title && <p className="p-2 mb-7 text-sm font-thin text-red-500">{errors.title}</p>}

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