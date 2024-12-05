enum typeOfTask {
    Pending = 'Pending',
    On_Process = 'On Process',
    Completed = 'Completed',
    Hold = 'Hold'
}

interface taskType {
    id:number;
    title: string;
    description: string;
    date:string;
    type: typeOfTask;
}

export {typeOfTask, type taskType};