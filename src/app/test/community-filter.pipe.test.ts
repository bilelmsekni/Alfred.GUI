import { expect } from 'chai';
import { CommunityFilterPipe } from '../community/community-filter.pipe';
import { Community } from '../community/community.entity';

function createCommunity(id: number, name?: string): Community {
    let community = new Community();
    community.id = id;
    community.name = name;
    return community;
}

describe('filter communities', function () {
    let communities = [
        createCommunity(0, 'java community'),
        createCommunity(0, 'dotNet community'),
        createCommunity(0, 'agile community'),
        createCommunity(0),
    ];
    it('should return 0 communities when filter is EcoConception', function () {
        let communityFilter = new CommunityFilterPipe();
        let res = communityFilter.transform(communities, 'EcoConception');
        expect(res.length).eql(0);
    });

    it('should return one community when filter is java ', function () {
        let communityFilter = new CommunityFilterPipe();
        let res = communityFilter.transform(communities, 'java');
        expect(res.length).eql(1);
    });

    it('should return 3 communities when filter is community ', function () {
        let communityFilter = new CommunityFilterPipe();
        let res = communityFilter.transform(communities, 'community');
        expect(res.length).eql(3);
    });

    it('should return one community when filter is AGILE ', function () {
        let communityFilter = new CommunityFilterPipe();
        let res = communityFilter.transform(communities, 'AGILE');
        expect(res.length).eql(1);
    });
});
