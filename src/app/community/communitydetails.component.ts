import { Component, OnInit } from '@angular/core';
import { CommunityDetailsModel } from './communitydetails.model';
import { CommunityService } from './community.service';
import { ArtifactService } from '../artifact/artifact.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './communitydetails.component.html',
    providers: [CommunityService, ArtifactService]
})
export class CommunityDetailsComponent implements OnInit {
    private model: CommunityDetailsModel;
    private _id: string = 'id';
    constructor(private _communityService: CommunityService,
        private _artifactService: ArtifactService,
        private _route: ActivatedRoute) {
        this.model = new CommunityDetailsModel();
    }

    public ngOnInit() {
        this._route.params
            .switchMap((params: Params) => this._communityService.getCommunity(+params[this._id]))
            .subscribe(community => this.model.community = community);

        this._route.params
            .switchMap((params: Params) => this._artifactService.getCommunityArtifacts(+params[this._id]))
            .subscribe(artifacts => this.model.artifacts = artifacts);
    }
}
