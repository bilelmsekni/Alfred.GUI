import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../common/logging.service';
import { ArtifactModel } from './artifact.model';
import { ArtifactService } from './artifact.service';

@Component({
    providers: [ArtifactService],
    templateUrl: './artifact.component.html'
})
export class ArtifactComponent implements OnInit {
    private model: ArtifactModel;
    constructor(private _artifactService: ArtifactService,
    private _loggingService: LoggingService) {
        this.model = new ArtifactModel();
    }

    public ngOnInit() {
        this._artifactService.getArtifacts()
            .subscribe(artifacts => this.model.artifacts = artifacts,
            error => this._loggingService.logError(error));
    }
}
