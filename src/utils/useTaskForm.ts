import { useState, ChangeEvent, FormEvent } from "react";
import { errorTaskType } from "../types/errorTaskType";
import { taskType, typeOfTask } from "../types/taskType";
//source: https://dev.to/obere4u/how-to-perform-form-validation-in-react-3kgi

export default function useTaskForm(handleAddTask:(task: taskType) => void, initialTask?: taskType){
    //Initiate the temporary container for inputs
    const initialData: taskType = initialTask || {
        id: 0,
        title: "",
        description: "",
        date: "",
        type: typeOfTask.On_Process,
    }
    const [formData, setFormData] = useState(initialData);

    //Initiate temporary container for error
    const initialError: errorTaskType = {
        title: "",
        description: "",
        date: "",
    }
    const [formErrors, setFormErrors] = useState(initialError); 

    //event handler for each input
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({...prevState, [name]: value}));
        
        //input validation
        if(name === "title"){
            setFormErrors((prevState) => ({
                ...prevState,
                title: value.trim() === "" ? "Title cannot be empty." : 
                (value.length < 4 ? "Title must be at least 4 characters." : ""),
            }));
        } else if (name === "description") {
            setFormErrors((prevState) => ({
                ...prevState,
                description: value.trim() === "" ? "Description cannot be empty." : 
                (value.length < 10 ? "Details must be at least 10 characters." : ""),
            }));
        } else if (name === "date" && value === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                date: "Date is required.",
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
        const isFormValid = (
            Object.values(formErrors).every((error) => error === "") 
            &&
            !(formData.title === "" || formData.description === "" || formData.date === "")
        );

        console.log(isFormValid);

        if (isFormValid) {
            // Form submission logic
            alert("Form submitted successfully!");
            //Input form
            handleAddTask(formData);
            // Reset the form
            setFormData(initialData);
            //Reset Error
            setFormErrors(initialError);
        } else {
            alert("Form has errors. Check again!");
        }
    }

    return{
        formData,
        formErrors,
        handleChange,
        handleSubmit
    }
}