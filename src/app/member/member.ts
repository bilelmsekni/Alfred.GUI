import { ITask } from '../task/task';
import { Role } from './role.enum';

export interface IMember {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    role: Role,
    tasks: ITask[],
}