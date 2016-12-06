import { Component, OnInit } from "@angular/core";
import { CommunityDetailsModel } from "./communitydetails.model";
import { CommunityService } from "./community.service";
import { ArtifactService} from "../artifact/artifact.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";

@Component({
    templateUrl: "./community/communitydetails.component.html",
    providers: [CommunityService, ArtifactService]
})
export class CommunityDetailsComponent implements OnInit {
    private model: CommunityDetailsModel;
    constructor(private _communityService: CommunityService,
    private _artifactService: ArtifactService,
        private _route: ActivatedRoute,
        private _location: Location) {
        this.model = new CommunityDetailsModel();
    }

    public ngOnInit() {
        this._route.params
            // tslint:disable-next-line:no-string-literal
            .switchMap((params: Params) => this._communityService.getCommunity(+params["id"]))
            .subscribe(community => this.model.community = community);

         this._route.params
            // tslint:disable-next-line:no-string-literal
            .switchMap((params: Params) => this._artifactService.getCommunityArtifacts(+params["id"]))
            .subscribe(artifacts => this.model.artifacts = artifacts);
    }
}
