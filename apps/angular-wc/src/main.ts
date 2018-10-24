import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



import * as alertDefine from '@o-rango/o-alert/dist/loader/';
import * as btnDefine from '@o-rango/o-button/dist/loader/';



import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
btnDefine.defineCustomElements(window);
alertDefine.defineCustomElements(window);
