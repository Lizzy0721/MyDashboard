import { useState, ChangeEvent, FormEvent } from "react";
import { errorTaskType } from "../types/errorTaskType";
import { taskType } from "../types/taskType";
//source

export default function useTaskForm(handleAddTask:(task: taskType) => void){
    //Initiate the temporary container for formData
    const initialData: taskType = {
        id: 0,
        title: "",
        details: "",
        date: "",
        type: "On Process",
    }
    const [formData, setFormData] = useState(initialData);

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
        setFormData(prevState => ({...prevState, [name]: value}));
        if(name === "title" && value.length < 4){
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
        const isFormValid = Object.values(formErrors).every((error) => error === "");

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
            alert("Form contains validation errors.");
        }
    }

    return{
        formData,
        formErrors,
        handleChange,
        handleSubmit
    }
}