export interface taskType {
    title: string;
    details: string;
    date:string;
    type: 'Pending' | 'On Process' | 'Completed' | 'Hold';
}