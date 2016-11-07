import { Pipe, PipeTransform } from '@angular/core';
import { ICommunity } from './community';

@Pipe({ name: 'communityFilter' })
export class CommunityFilterPipe implements PipeTransform {

    transform(value: ICommunity[], args: string[]): ICommunity[] {
        let filter: string = args[0]? args[0].toLocaleLowerCase():null;
        return filter ? value.filter((community: ICommunity) =>
            community.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }

}