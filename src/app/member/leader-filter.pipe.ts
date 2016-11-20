import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.entity';
import { CommunityRole } from './community-role.enum';

@Pipe({
    name: 'leaderFilter'
})
export class LeaderFilterPipe implements PipeTransform {

    transform(members: Member[]): string {
        let leader = members.find((member: Member) => member.role == CommunityRole.Leader);
        return leader ? leader.firstName + ' ' + leader.lastName : 'no leader';
    }
}