import { Http, Response } from '@angular/http';
import { ConfigurationService } from './configuration.service';
import { IAppSettings } from './configuration';
import { Observable } from 'rxjs';

export class BaseService {
    private _appSettings: IAppSettings;
    constructor(public _http: Http, _configService: ConfigurationService) {
        console.log(_configService.appSettings);       
        this._appSettings = _configService.appSettings;
    }

    private createApiUrl(urlFragment: string): string {
        return this._appSettings.apiUrl.replace('{resource}', urlFragment);
        //return "http://localhost:50405/{resource}".replace('{resource}', urlFragment);
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