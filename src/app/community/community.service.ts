import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Community } from "./community.entity";
import { BaseService } from "../common/base.service";
import { ConfigurationService } from "../common/configuration.service";

@Injectable()
export class CommunityService extends BaseService {
    private _communitiesUrl = "communities";

    constructor(_http: Http, _configService: ConfigurationService) {
        super(_http, _configService);
    }

    public getCommunities(): Observable<Community[]> {
        return super.getData<Community>(this._communitiesUrl);
    }
}
