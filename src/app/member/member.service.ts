import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Member } from './member.entity';
import { BaseService } from './../common/services/base.service';
import { ConfigurationService } from './../common/services/configuration.service';
import { Http } from '@angular/http';

@Injectable()
export class MemberService extends BaseService {

    constructor(http: Http, configService: ConfigurationService) {
        super(http, configService.getAlfredApiSettings());
    }

    public getMembers(args: any): Observable<Member[]> {
        return super.getData<Member>('members', args);
    }

    public getMember(id: number): Observable<Member> {
        return super.getDataItem<Member>('members/' + id);
    }
}
