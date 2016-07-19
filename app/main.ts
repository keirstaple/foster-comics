import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { disableDeprecatedForms, provideForms } from '@angular/forms';


bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
])
.catch((err: any) => console.error(err));
