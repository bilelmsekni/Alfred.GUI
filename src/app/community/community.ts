import { IMember } from '../member/member';
import { ITask } from '../task/task';

export interface ICommunity {
    name: string;
    email: string;
    members: IMember[];
    tasks: ITask[];
}