import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { CommunityService } from '../community/community.service';
import { NavigationModel } from './navigation.model';
import { ArtifactStatus } from '../artifact/artifact-status.enum';
import {EnumExtension} from '../common/enum.extension';
import { CommunityRole} from '../member/community-role.enum';
@Component({
    templateUrl: './navigation.component.html',
    providers: [CommunityService],
    selector: 'al-navigation'
})
export class NavigationComponent implements OnInit {
    private model: NavigationModel;

    constructor(private _communityService: CommunityService,
    private _loggingService: LoggingService) {
        this.model = new NavigationModel();
    }

    public ngOnInit() {
        this._communityService.getCommunities()
            .subscribe(res => this.model.communities = res, error => this._loggingService.logError(error));
        this.model.artifactStatuses = this.GetArtifactStatuses();
        this.model.communityRoles = this.GetCommunityRoles();
    }

    private GetArtifactStatuses() {
        return EnumExtension.getNamesAndValues(ArtifactStatus);
    }

    private GetCommunityRoles() {
        return EnumExtension.getNamesAndValues(CommunityRole);
    }
}
