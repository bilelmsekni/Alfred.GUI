import { TaskType } from './task-type.enum'
import { TaskStatus } from './task-status.enum'

export interface ITask {
    title: string;
    reward: number;
    type: TaskType;
    status: TaskStatus;
    bonus: number;
}