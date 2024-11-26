export interface taskType {
    id:number;
    title: string;
    description: string;
    date:string;
    type: | 'Pending' | 'On Process' | 'Completed' | 'Hold';
}