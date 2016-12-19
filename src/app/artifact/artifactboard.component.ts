import { Component, OnInit } from "@angular/core";
import { ArtifactService} from "./artifact.service";
import { ArtifactBoardModel} from "./artifactboard.model";

@Component({
    selector: "al-artifactboard",
    providers: [ArtifactService],
    templateUrl: "./artifact/artifactboard.component.html"
})
export class ArtifactboardComponent implements OnInit {
    private model: ArtifactBoardModel;
    constructor(private _artifactService: ArtifactService) {
        this.model = new ArtifactBoardModel();
    }
    public ngOnInit() {
        this._artifactService.getMemberArtifacts(1)
            .subscribe(artifacts => this.model.artifacts = artifacts,
            error => this.model.errorMessage = <any>error);
    }
}
