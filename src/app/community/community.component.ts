import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../common/logging.service';
import { CommunityService } from './community.service';
import { CommunityModel } from './community.model';

@Component({
    providers: [CommunityService],
    templateUrl: './community.component.html'
})
export class CommunityComponent implements OnInit {
    private model: CommunityModel;

    constructor(private _communityService: CommunityService,
        private _loggingService: LoggingService) {
        this.model = new CommunityModel();
    }

    public ngOnInit() {
        this._communityService.getCommunities()
            .subscribe(res => this.model.communities = res, error => this._loggingService.logError(error));
    }
}
