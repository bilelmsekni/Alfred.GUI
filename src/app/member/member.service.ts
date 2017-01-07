import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Member } from './member.entity';
import { ConfigurationService, BaseService } from '../common/services';

@Injectable()
export class MemberService extends BaseService {
    private _membersUrl: string = 'members';

    constructor(_http: Http, _configService: ConfigurationService) {
        super(_http, _configService);
    }

    public getMembers(): Observable<Member[]> {
        return super.getData<Member>(this._membersUrl);
    }

    public getMember(id: number): Observable<Member> {
        let url = this._membersUrl + '/' + id;
        return super.getDataItem<Member>(url);
    }

    public getMembersWithQueryParams(queryParams: any): Observable<Member[]> {
        let queryUrl = this._membersUrl + '?' + super.encodeQueryParams(queryParams);
        return super.getData<Member>(queryUrl);
    }
}
