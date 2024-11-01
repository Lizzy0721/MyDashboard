export interface taskType {
    id:number;
    title: string;
    details: string;
    date:string;
    type: | 'Pending' | 'On Process' | 'Completed' | 'Hold';
}