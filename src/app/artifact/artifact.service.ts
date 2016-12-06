import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { Artifact } from "./artifact.entity";
import { BaseService } from "../common/base.service";
import { ConfigurationService } from "../common/configuration.service";

@Injectable()
export class ArtifactService extends BaseService {
    private _artifactUrl = "artifacts";

    constructor(_http: Http, _configService: ConfigurationService) {
        super(_http, _configService);
    }

    public getArtifacts(): Observable<Artifact[]> {
        return super.getData<Artifact>(this._artifactUrl);
    }

    public getInProgressArtifacts(): Observable<Artifact[]> {
        let inProgressUrl = this._artifactUrl + "?status=1";
        return super.getData<Artifact>(inProgressUrl);
    }

    public getCommunityArtifacts(id: number): Observable<Artifact[]> {
        let communityArtifactsUrl = this._artifactUrl + "?communityId=" + id;
        return super.getData<Artifact>(communityArtifactsUrl);
    }
}
