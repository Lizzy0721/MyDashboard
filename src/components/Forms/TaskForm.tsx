import { format } from "date-fns";
import { taskType } from "../../types/taskType";
import useTaskForm from "../../utils/useTaskForm";

interface TaskFormProps {
    handleForm:()=>void;
    handleAddTask:(task: taskType) => void;
}

export default function TaskForm({handleForm, handleAddTask}:TaskFormProps){

    const {
        formData,
        formErrors,
        handleChange,
        handleSubmit
    } = useTaskForm(handleAddTask);
    
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
                        value={formData.title}
                        onChange={handleChange}
                        placeholder= "Kasih judul di sini euy" 
                        className="w-full rounded-lg bg-blue-50 p-2 text-base font-normal placeholder:text-silver_lake_blue-300"
                    />
                    {formErrors.title && <p className="text-sm font-thin text-red-500">{formErrors.title}</p>}
                </div>
                <div className="my-3">
                    <label className="text-xl font-semibold text-silver_lake_blue-700"
                    >Description</label>
                    <input 
                        type="text"
                        id = "details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder= "Kasih deskripsi di sini euy"
                        className="w-full rounded-lg bg-blue-50 p-2 text-base font-normal placeholder:text-silver_lake_blue-300"
                    />
                    {formErrors.details && <p className="text-sm font-thin text-red-500">{formErrors.details}</p>}
                </div>
                <div>
                    <label className="text-xl font-semibold text-silver_lake_blue-700"
                    >Deadline</label>
                    <br />
                    <input 
                        type = "date"
                        id = "date"
                        name = "date"
                        value={formData.date}
                        min={format(new Date(), "yyyy-MM-dd")}
                        onChange={handleChange}
                        className="rounded-lg bg-blue-50 p-2 mb-7 text-base font-normal"
                    />
                    {formErrors.date && <p className="text-sm font-thin text-red-500">{formErrors.date}</p>}
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
                            value={formData[item as keyof typeof formData] || ""}
                            onChange={handleChange}
                            placeholder= "Type here" 
                            className="w-full rounded-lg bg-blue-50 p-2 mb-7 text-base font-normal placeholder:text-silver_lake_blue-300"
                        />
                    </label>
                )}
*/