import { expect } from 'chai';
import { Member, LeaderFilterPipe, CommunityRole } from '../member';

function createMember(id: number, firstName?: string, lastName?: string, role?: CommunityRole): Member {
    let member = new Member();
    member.id = id;
    member.firstName = firstName;
    member.lastName = lastName;
    member.role = role;
    return member;
}

describe('find leader', function () {
    let memberswithoutleader = [
        createMember(0, 'jack', 'khan', CommunityRole.Contributor),
        createMember(0, 'jet', 'go', CommunityRole.Manager),
        createMember(0),
    ];

    let memberswithleader = memberswithoutleader.concat(
        createMember(0, 'tom', 'jetcrose', CommunityRole.Leader));

    let memberswithleaderwithNoLastName = memberswithoutleader.concat(
        createMember(0, 'tom', null, CommunityRole.Leader));

    it('should return no leaders when no leader exists', function () {
        let leaderFilter = new LeaderFilterPipe();
        let res = leaderFilter.transform(memberswithoutleader);
        expect(res).eql('no leader');
    });

    it('should return tom jetcrose when tom jetcrose is leader ', function () {
        let leaderFilter = new LeaderFilterPipe();
        let res = leaderFilter.transform(memberswithleader);
        expect(res).eql('tom jetcrose');
    });

    it('should return tom when tom is leader ', function () {
        let leaderFilter = new LeaderFilterPipe();
        let res = leaderFilter.transform(memberswithleaderwithNoLastName);
        expect(res).eql('tom');
    });
});
