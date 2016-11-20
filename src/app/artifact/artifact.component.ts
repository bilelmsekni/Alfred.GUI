import { Component, OnInit } from "@angular/core";
import { ArtifactModel } from "./artifact.model";
import { ArtifactService } from "./artifact.service";

@Component({
    providers: [ArtifactService],
    templateUrl: "./artifact/artifact.component.html"
})
export class ArtifactComponent implements OnInit {
    private model: ArtifactModel;
    constructor(private _artifactService: ArtifactService) {
        this.model = new ArtifactModel();
    }

    public ngOnInit() {
        this._artifactService.getArtifacts()
            .subscribe(artifacts => this.model.artifacts = artifacts,
            error => this.model.errorMessage = <any>error);
    }
}
