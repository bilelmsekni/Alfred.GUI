import { CommunityService } from './community.service';
import { Community } from './index';
import { Component, OnInit } from '@angular/core';
import { Artifact, ArtifactService } from '../artifact';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './communitydetails.component.html'
})
export class CommunityDetailsComponent implements OnInit {
    public community: Community = new Community();
    public artifacts: Artifact[] = [];
    private _id: string = 'id';

    constructor(private _communityService: CommunityService,
        private _artifactService: ArtifactService,
        private _route: ActivatedRoute) {
    }

    public ngOnInit() {
        this._route.params
            .switchMap((params: Params) => this._communityService.getCommunity(+params[this._id]))
            .subscribe(community => this.community = community);

        this._route.params
            .switchMap((params: Params) => this._artifactService.getCommunityArtifacts(+params[this._id]))
            .subscribe(artifacts => this.artifacts = artifacts);
    }
}
