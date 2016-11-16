import { Http, Response } from '@angular/http';
import { ConfigurationService } from './configuration.service';
import { IAppSettings } from './app.settings';
import { Observable } from 'rxjs';

export class BaseService {
    private _appSettings: IAppSettings;
    constructor(public _http: Http, _configService: ConfigurationService) {
        this._appSettings = _configService.appSettings;
    }

    private createApiUrl(urlFragment: string): string {
        let oko: Boolean = false;
        while(!oko)
        {
        if (this._appSettings)
        {
            oko = true;
            return this._appSettings.apiUrl.replace('{resource}', urlFragment);
        }  
        console.log(this._appSettings);      
        }
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