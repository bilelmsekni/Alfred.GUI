import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { IMember } from './member.entity';

@Injectable()
export class MemberService {
    _membersUrl: string = './api/members.fake.json';

    constructor(private _http: Http) {
    }

    getMembers(): Observable<IMember[]> {
        return this._http.get(this._membersUrl)
            .map((res: Response) => res.json() as IMember[])
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}