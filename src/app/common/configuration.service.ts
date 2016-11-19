import { Inject, Injectable } from "@angular/core";
import { IAppSettings } from "./app.settings";
import { APP_CONFIG_ENV } from "../config/env.config";
import { prdSettings, devSettings, fakeSettings } from "../config/alfred.settings";

@Injectable()
export class ConfigurationService {

    private _appSettings: IAppSettings;
    get appSettings(): IAppSettings {
        return this._appSettings;
    }

    constructor( @Inject(APP_CONFIG_ENV) configEnv: string) {
        if (configEnv === "DEV") {
            this._appSettings = devSettings;
        }else if (configEnv === "PRD") {
            this._appSettings = prdSettings;
        }else {
            this._appSettings = fakeSettings;
        }
    }
}
