import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services';
import { Community, CommunityService } from '../../community/';
import { ArtifactStatus } from '../../artifact';
import { EnumExtension } from '../extensions';
import { CommunityRole } from '../../member';

@Component({
    templateUrl: './navigation.component.html',
    selector: 'al-navigation'
})
export class NavigationComponent implements OnInit {
    public communities: Community[] = [];
    public artifactStatuses: any[] = [];
    public communityRoles: any[] = [];

    constructor(private _communityService: CommunityService,
        private _loggingService: LoggingService) {
    }

    public ngOnInit() {
        this._communityService.getCommunities()
            .subscribe(res => this.communities = res, error => this._loggingService.logError(error));
        this.artifactStatuses = this.GetArtifactStatuses();
        this.communityRoles = this.GetCommunityRoles();
    }

    private GetArtifactStatuses() {
        return EnumExtension.getNamesAndValues(ArtifactStatus);
    }

    private GetCommunityRoles() {
        return EnumExtension.getNamesAndValues(CommunityRole);
    }
}
