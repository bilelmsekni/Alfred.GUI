import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { IMember } from './member.entity';
import { BaseService} from '../common/base.service';
import { ConfigurationService } from '../common/configuration.service';

@Injectable()
export class MemberService extends BaseService {
    _membersUrl: string = 'members';

    constructor(_http: Http, _configService: ConfigurationService) {
        super(_http, _configService);
    }

    getMembers(): Observable<IMember[]> {
        return super.getData<IMember>(this._membersUrl);
    }
}