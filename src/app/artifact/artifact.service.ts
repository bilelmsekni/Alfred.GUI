import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Artifact } from './';
import { ConfigurationService , BaseService } from '../common/services';

@Injectable()
export class ArtifactService extends BaseService {
    private _artifactsUrl = 'artifacts';

    constructor(_http: Http, _configService: ConfigurationService) {
        super(_http, _configService.getAlfredApiSettings());
    }

    public getArtifacts(): Observable<Artifact[]> {
        return super.getData<Artifact>(this._artifactsUrl);
    }

    public getMemberArtifacts(id: number): Observable<Artifact[]> {
        let memberUrl = this._artifactsUrl + '?memberId=' + id;
        return super.getData<Artifact>(memberUrl);
    }

    public getCommunityArtifacts(id: number): Observable<Artifact[]> {
        let communityArtifactsUrl = this._artifactsUrl + '?communityId=' + id;
        return super.getData<Artifact>(communityArtifactsUrl);
    }
    public getArtifact(id: number): Observable<Artifact> {
        let url = this._artifactsUrl + '/' + id;
        return super.getDataItem<Artifact>(url);
    }
}
