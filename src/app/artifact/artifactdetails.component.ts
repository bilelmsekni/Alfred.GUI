import { ArtifactService } from './artifact.service';
import { Component, OnInit } from '@angular/core';
import { Artifact } from './';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './artifactdetails.component.html'
})
export class ArtifactDetailsComponent implements OnInit {
    public artifact: Artifact;
    constructor(private _artifactService: ArtifactService,
        private _route: ActivatedRoute,
        private _location: Location) {
        this.artifact = new Artifact();
    }

    public ngOnInit() {
        this._route.params
            .switchMap((params: Params) => this._artifactService.getArtifact(+params['id']))
            .subscribe(artifact => this.artifact = artifact);
    }
}
