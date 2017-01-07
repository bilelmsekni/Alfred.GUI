import { Artifact } from './artifact.entity';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../common/services';
import { ArtifactService } from './artifact.service';

@Component({
    templateUrl: './artifact.component.html'
})
export class ArtifactComponent implements OnInit {
        public listFilter: string = '';
    public artifacts: Artifact[] = [];
    constructor(private _artifactService: ArtifactService,
    private _loggingService: LoggingService) {
    }

    public ngOnInit() {
        this._artifactService.getArtifacts()
            .subscribe(artifacts => this.artifacts = artifacts,
            error => this._loggingService.logError(error));
    }
}
