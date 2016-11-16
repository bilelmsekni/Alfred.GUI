import { IAppSettings } from '../common/app.settings';

export const devSettings: IAppSettings = {
    "apiUrl": "http://localhost:50405/{resource}"
}

export const fakeSettings: IAppSettings = {
    "apiUrl": "./api/{resource}.fake.json"
}