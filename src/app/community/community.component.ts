import { Community } from './';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../common/services';
import { CommunityService } from './community.service';

@Component({
    templateUrl: './community.component.html'
})
export class CommunityComponent implements OnInit {
    public communities: Community[] = [];
    public listFilter: string = '';

    constructor(private _communityService: CommunityService,
        private _loggingService: LoggingService) {
    }

    public ngOnInit() {
        this._communityService.getCommunities()
            .subscribe(res => this.communities = res, error => this._loggingService.logError(error));
    }
}
