import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './firstmodule/first.module';
import { environment } from './environments/environment';
import { AppModule } from './12-spa-navigation/app.module';
//import { AppModule } from './11-spa-nest-modules/app.module';
//import { AppModule } from './10-spa/app.module';
//import { AppModule } from './09-pipes/app.module';
//import { AppModule } from './08-directives/app.module';
//import { AppModule } from './07-directives/app.module';
//import { AppModule } from './06-databinding/app.module';
//import { AppModule } from './05-component/app.module';
//import { AppModule } from './04-component/app.module';
//import { AppModule } from './03-component/app.module';
//import { AppModule } from './02-component/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
