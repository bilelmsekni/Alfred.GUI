import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_ENV, IAppSettings } from '../settings';
import { prdSettings, devSettings, fakeSettings } from '../settings/alfred.settings';

@Injectable()
export class ConfigurationService {

    private _appSettings: IAppSettings;
    get appSettings(): IAppSettings {
        return this._appSettings;
    }

    constructor( @Inject(APP_CONFIG_ENV) configEnv: string) {
        if (configEnv === 'DEV') {
            this._appSettings = devSettings;
        }else if (configEnv === 'PRD') {
            this._appSettings = prdSettings;
        }else {
            this._appSettings = fakeSettings;
        }
    }
}
