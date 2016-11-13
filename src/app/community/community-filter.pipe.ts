import { Pipe, PipeTransform } from '@angular/core';
import { ICommunity } from './community.entity';

@Pipe({ name: 'communityFilter' })
export class CommunityFilterPipe implements PipeTransform {

    transform(value: ICommunity[], arg: string): ICommunity[] {
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? value.filter((community: ICommunity) =>
            community.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }

}