import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Community } from './community.entity';
import { BaseService, ConfigurationService } from '../common/services';

@Injectable()
export class CommunityService extends BaseService {
    private _communitiesUrl = 'communities';

    constructor(_http: Http, _configService: ConfigurationService) {
        super(_http, _configService.getAlfredApiSettings());
    }

    public getCommunities(): Observable<Community[]> {
        return super.getData<Community>(this._communitiesUrl);
    }

    public getCommunity(id: number): Observable<Community> {
        let url = this._communitiesUrl + '/' + id;
        return super.getDataItem<Community>(url);
    }
}
