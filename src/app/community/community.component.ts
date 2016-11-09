import { Component, OnInit } from '@angular/core';
import { ICommunity } from './community';
import { CommunityService } from './community.service';

@Component({
    templateUrl: './community/community.component.html',
    providers: [CommunityService]
})
export class CommunityComponent implements OnInit {
    listFilter: string = '';
    communities: ICommunity[] = [];
    errorMessage: string = '';
    constructor(private _communityService: CommunityService) {
    }

    ngOnInit() {
        this._communityService.getCommunities()
            .subscribe(communities => this.communities = communities, error => this.errorMessage = <any>error);
    }
}