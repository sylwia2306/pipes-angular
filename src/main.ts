import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl'

registerLocaleData(localePl);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
