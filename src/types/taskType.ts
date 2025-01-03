enum typeOfTask {
    pending = 'Pending',
    on_process = 'On Process',
    completed = 'Completed',
    hold = 'Hold'
}

interface taskType {
    id:number;
    title: string;
    description: string;
    date:string;
    type: typeOfTask;
}

export {typeOfTask, type taskType};