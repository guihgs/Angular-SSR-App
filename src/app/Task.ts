//create interface to mock-tasks
export interface Task {
    //? is optional
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}