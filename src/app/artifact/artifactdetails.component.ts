import { Component, OnInit } from "@angular/core";
import { ArtifactService } from "./artifact.service";
import { ArtifactDetailsModel } from "./artifactdetails.model";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";

@Component({
    templateUrl: "./artifact/artifactdetails.component.html",
    providers: [ArtifactService]
})
export class ArtifactDetailsComponent implements OnInit {
    private model: ArtifactDetailsModel;
    constructor(private _artifactService: ArtifactService,
        private _route: ActivatedRoute,
        private _location: Location) {
        this.model = new ArtifactDetailsModel();
    }

    public ngOnInit() {
        this._route.params
            .switchMap((params: Params) => this._artifactService.getArtifact(+params["id"]))
            .subscribe(artifact => this.model.artifact = artifact);

            console.log(this.model.artifact);
    }
}
