import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './task';

@Pipe({
    name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

    transform(tasks: ITask[], arg: string): ITask[] {
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? tasks.filter((t: ITask) => t.title.toLocaleLowerCase().indexOf(filter) != -1) : tasks;
    }
}