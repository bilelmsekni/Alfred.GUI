import { Http, Response } from '@angular/http';
import { ConfigurationService } from './configuration.service';
import { IAppSettings } from './configuration';
import { Observable } from 'rxjs';

export class BaseService {
    private _appSettings: IAppSettings;
    constructor(public _http: Http, _configService: ConfigurationService) {
        this._appSettings = _configService.appSettings;
    }

    private createApiUrl(urlFragment: string): string {
        return 'http://localhost:50405/' + urlFragment;//this._appSettings.apiUrl + urlFragment;
    }

    public getData<T>(urlFragment: string): Observable<T[]> {
        return this._http.get(this.createApiUrl(urlFragment))
            .map((res: Response) => res.json() as T[])
            .catch(this.handleError);
    }

    handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}