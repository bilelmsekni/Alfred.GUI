import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Member } from './member.entity';
import { BaseService} from '../common/base.service';
import { ConfigurationService } from '../common/configuration.service';

@Injectable()
export class MemberService extends BaseService {
    _membersUrl: string = 'members';

    constructor(_http: Http, _configService: ConfigurationService) {
        super(_http, _configService);
    }

    getMembers(): Observable<Member[]> {
        return super.getData<Member>(this._membersUrl);
    }
}