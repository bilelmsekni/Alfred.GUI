import { Http, Response } from '@angular/http';
import { ConfigurationService } from './configuration.service';
import { IAppSettings } from '../settings';
import { Observable } from 'rxjs';

export class BaseService {
    private _appSettings: IAppSettings;
    constructor(public _http: Http, _configService: ConfigurationService) {
        this._appSettings = _configService.appSettings;
    }

    public getData<T>(urlFragment: string): Observable<T[]> {
        return this._http.get(this.createApiUrl(urlFragment))
            .map((res: Response) => res.json().results as T[])
            .catch(this.handleError);
    }

    public getDataItem<T>(urlFragment: string): Observable<T> {
        return this._http.get(this.createApiUrl(urlFragment))
            .map((res: Response) => res.json() as T)
            .catch(this.handleError);
    }

    public encodeQueryParams(queryParams: any): string {
        let queryUrl: string[] = [];
        for (let qp in queryParams) {
            queryUrl.push(encodeURIComponent(qp) + '=' + encodeURIComponent(queryParams[qp]));
        }
        return queryUrl.join('&');
    }

    private createApiUrl(urlFragment: string): string {
        return this._appSettings.apiUrl.replace('{resource}', urlFragment);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
