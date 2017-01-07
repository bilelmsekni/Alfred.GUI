import { Inject, Injectable } from '@angular/core';
import { APP_SETTINGS, AppSettings } from '../settings';

@Injectable()
export class ConfigurationService {
    private _appSettings: AppSettings;

    constructor( @Inject(APP_SETTINGS) settings: string) {
        this._appSettings = settings;
    }
    public get appSettings(): AppSettings {
        return this._appSettings;
    }
}
