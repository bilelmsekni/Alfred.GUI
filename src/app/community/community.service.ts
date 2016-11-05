import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ICommunity} from './community';

@Injectable()
export class CommunityService {
    private _communityUrl = './api/communities.fake.json';
    constructor(private _http: Http) {
    }

    getCommunities(): Observable<ICommunity[]> {        
        return this._http.get(this._communityUrl)
            .map((res: Response) => res.json() as ICommunity[])            
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}