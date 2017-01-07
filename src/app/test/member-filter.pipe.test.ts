import { expect } from 'chai';
import { MemberFilterPipe, Member } from '../member';

function createMember(id: number, firstName?: string, lastName?: string): Member {
    let member = new Member();
    member.id = id;
    member.firstName = firstName;
    member.lastName = lastName;
    return member;
}

describe('filter members', function () {
    let members = [
        createMember(0, 'jack', 'khan'),
        createMember(0, 'tom', 'jetcrose'),
        createMember(0, 'jet', 'go'),
        createMember(0),
    ];
    it('should return 0 members when filter is Bilel', function () {
        let memberFilter = new MemberFilterPipe();
        let res = memberFilter.transform(members, 'Bilel');
        expect(res.length).eql(0);
    });

    it('should return one member when filter is jack ', function () {
        let memberFilter = new MemberFilterPipe();
        let res = memberFilter.transform(members, 'jack');
        expect(res.length).eql(1);
    });

    it('should return two members when filter is jet ', function () {
        let memberFilter = new MemberFilterPipe();
        let res = memberFilter.transform(members, 'jet');
        expect(res.length).eql(2);
    });

    it('should return one members when filter is KHAN ', function () {
        let memberFilter = new MemberFilterPipe();
        let res = memberFilter.transform(members, 'KHAN');
        expect(res.length).eql(1);
    });
});
