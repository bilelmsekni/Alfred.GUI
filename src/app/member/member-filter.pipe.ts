import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.entity';

@Pipe({ name: 'memberFilter' })
export class MemberFilterPipe implements PipeTransform {
    public transform(value: Member[], arg: string): Member[] {
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? value.filter((member: Member) => this.isMatch(member, filter)) : value;
    }

    private isMatch(member: Member, filter: string): boolean {
        let firstName = member.firstName ? member.firstName.toLocaleLowerCase() : null;
        let lastName = member.lastName ? member.lastName.toLocaleLowerCase() : null;
        return (firstName ? firstName.indexOf(filter) !== -1 : false)
            || (lastName ? lastName.indexOf(filter) !== -1 : false);
    }
}
