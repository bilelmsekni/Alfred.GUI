import { Pipe, PipeTransform } from '@angular/core';
import { Community } from './community.entity';

@Pipe({ name: 'communityFilter' })
export class CommunityFilterPipe implements PipeTransform {

    public transform(value: Community[], arg: string): Community[] {
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? value.filter((community: Community) =>
            this.isMatch(community, filter)) : value;
    }

    private isMatch(community: Community, filter: string): boolean {
        let name = community.name ? community.name.toLocaleLowerCase() : null;
        return name ? (community.name.toLocaleLowerCase().indexOf(filter) !== -1) : false;
    }
}
