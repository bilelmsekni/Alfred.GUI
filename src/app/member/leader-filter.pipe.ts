import { Pipe, PipeTransform } from '@angular/core';
import { IMember } from './member';
import { Role } from './role.enum';

@Pipe({
    name: 'leaderFilter'
})
export class LeaderFilterPipe implements PipeTransform {

    transform(members: IMember[]): string {
        let leader =  members.find((member: IMember) => member.role == Role.Leader);
        return leader ? leader.firstName + ' ' + leader.lastName : 'no leader';
    }
}