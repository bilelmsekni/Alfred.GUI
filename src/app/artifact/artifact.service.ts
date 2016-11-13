import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { IArtifact } from './artifact.entity';
import { BaseService } from '../common/base.service';
import { ConfigurationService } from '../common/configuration.service';

@Injectable()
export class ArtifactService extends BaseService {
    private _artifactUrl = 'artifacts';
    private _artifacts: IArtifact[];

    constructor(_http: Http, _configService: ConfigurationService) {
        super(_http, _configService)
    }

    getArtifacts(): Observable<IArtifact[]> {        
        return super.getData<IArtifact>(this._artifactUrl);            
    }
}