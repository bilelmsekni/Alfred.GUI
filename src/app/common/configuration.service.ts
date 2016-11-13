import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { IAppSettings } from './configuration';

@Injectable()
export class ConfigurationService {
    private _envConfigUrl: string = './config/env.json';
    private _configUrl: string = './config/alfred.ENV.json';
    private _configEnv: string = '';
    private _appSettings: IAppSettings;
    get appSettings(): IAppSettings {
        return this._appSettings;
    }

    constructor(protected _http: Http) {
        this.loadSettings();
    }

    private loadSettings() {
        this._http.get(this._envConfigUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError)
            .subscribe(data => {
                this._configEnv = data.configEnv;
                this._http.get(this._configUrl.replace('ENV', this._configEnv))
                    .map((res: Response) => res.json().appSettings as IAppSettings)
                    .catch(this.handleError)
                    .subscribe((settings: IAppSettings) => this._appSettings = settings);
            });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}