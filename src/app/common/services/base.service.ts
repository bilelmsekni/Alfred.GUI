import { Http, Response } from '@angular/http';
import { ApiSettings } from '../settings';
import { Observable } from 'rxjs';

export class BaseService {
    constructor(public _http: Http, public _apiSettings: ApiSettings) {
    }

    public getData<T>(urlFragment: string, queryParams?: any): Observable<T[]> {
        return this._http.get(this.createApiUrl(urlFragment, queryParams))
            .map((res: Response) => res.json().results as T[])
            .catch(this.handleError);
    }

    public getDataItem<T>(urlFragment: string, queryParams?: any): Observable<T> {
        return this._http.get(this.createApiUrl(urlFragment, queryParams))
            .map((res: Response) => res.json() as T)
            .catch(this.handleError);
    }

    public encodeQueryParams(queryParams: any): string {
        let queryUrl: string[] = [];
        for (let qp in queryParams) {
            queryUrl.push(encodeURIComponent(qp) + '=' + encodeURIComponent(queryParams[qp]));
        }
        return '?' + queryUrl.join('&');
    }

    private createApiUrl(urlFragment: string, queryParams: any): string {
        return this._apiSettings.apiUrl.replace('{resource}', urlFragment)
            + (queryParams ? this.encodeQueryParams(queryParams) : '');
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
