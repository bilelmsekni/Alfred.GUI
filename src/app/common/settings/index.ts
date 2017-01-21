import { OpaqueToken } from '@angular/core';
export { AppSettings } from './app.settings';
export { ApiSettings } from './api.settings';

export const SETTINGS = process.env['SETTINGS'];
export let APP_SETTINGS = new OpaqueToken('env.config');
