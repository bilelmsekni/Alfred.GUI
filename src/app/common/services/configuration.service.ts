import { Inject, Injectable } from '@angular/core';
import { APP_SETTINGS, AppSettings, ApiSettings } from '../settings';

@Injectable()
export class ConfigurationService {
    private _appSettings: AppSettings;

    constructor( @Inject(APP_SETTINGS) settings: AppSettings) {
        this._appSettings = settings;
    }
    public getAlfredApiSettings(): ApiSettings {
        return this._appSettings.alfredApi;
    }
}
