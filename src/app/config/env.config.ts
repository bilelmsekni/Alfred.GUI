import { OpaqueToken } from "@angular/core";

export const CONFIG_ENV = "FAKE"; // DEV, PRD
export let APP_CONFIG_ENV = new OpaqueToken("env.config");
