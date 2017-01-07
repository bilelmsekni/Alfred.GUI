import { ArtifactService } from './artifact.service';
import { Artifact } from './index';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../common/services';

@Component({
    selector: 'al-artifactboard',
    templateUrl: './artifactboard.component.html'
})
export class ArtifactboardComponent implements OnInit {
    public artifacts: Artifact[]= [];
    public icon: string = 'fa-artifacts';
    public boardLink: string = '/artifacts';

    constructor(private _artifactService: ArtifactService,
        private _loggingService: LoggingService) {
    }
    public ngOnInit() {
        this._artifactService.getMemberArtifacts(1)
            .subscribe(artifacts => this.artifacts = artifacts,
            error => this._loggingService.logError(error));
    }
}
