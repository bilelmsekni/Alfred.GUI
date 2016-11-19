import { Component, OnInit } from "@angular/core";
import { ArtifactModel } from "./artifact.model";
import { ArtifactService } from "./artifact.service";

@Component({
    templateUrl: "./artifact/artifact.component.html",
    providers: [ArtifactService]
})
export class ArtifactComponent implements OnInit {
    model: ArtifactModel;
    listFilter: string = "";
    constructor(private _artifactService: ArtifactService) {
        this.model = new ArtifactModel();
    }

    ngOnInit() {
        this._artifactService.getArtifacts()
            .subscribe(artifacts => this.model.artifacts = artifacts,
            error => this.model.errorMessage = <any>error);
    }
}
