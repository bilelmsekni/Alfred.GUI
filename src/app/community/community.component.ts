import { Component, OnInit } from '@angular/core';
import { Community } from './community.entity';
import { CommunityService } from './community.service';
import { CommunityModel } from './community.model';

@Component({
    templateUrl: './community/community.component.html',
    providers: [CommunityService]
})
export class CommunityComponent implements OnInit {
    listFilter: string = '';
    model: CommunityModel;

    constructor(private _communityService: CommunityService) {
        this.model = new CommunityModel();
    }

    ngOnInit() {
        this._communityService.getCommunities()
            .subscribe(res => this.model.communities = res, error => this.model.errorMessage = <any>error);
    }
}