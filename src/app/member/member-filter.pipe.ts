import { Pipe, PipeTransform } from '@angular/core';
import { IMember } from './member.entity';

@Pipe({ name: 'memberFilter' })
export class MemberFilterPipe implements PipeTransform {
    transform(value: IMember[], arg: string): IMember[] {
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? value.filter((member: IMember) => member.firstName.toLocaleLowerCase().indexOf(filter) != -1 ||
            member.lastName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}