enum typeOfTask {
    'Pending',
    'On Process',
    'Completed',
    'Hold'
}

interface taskType {
    id:number;
    title: string;
    details: string;
    date:string;
    type: typeOfTask;
}

export {typeOfTask, type taskType};