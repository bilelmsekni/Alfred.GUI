import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { ConfigurationService } from './common/configuration.service';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);