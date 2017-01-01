import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.entity';
import { CommunityRole } from './community-role.enum';

@Pipe({
    name: 'leaderFilter'
})
export class LeaderFilterPipe implements PipeTransform {

    public transform(members: Member[]): string {
        let leader = members.find((member: Member) => this.isMatch(member));
        return leader ? this.getLeaderFullName(leader) : 'no leader';
    }

    private isMatch(member: Member): boolean {
        return member.role === CommunityRole.Leader;
    }

    private getLeaderFullName(leader: Member): string {
        return (leader.firstName ? leader.firstName : '')
            + (leader.firstName && leader.lastName ? ' ' : '')
            + (leader.lastName ? leader.lastName : '');
    }
}
