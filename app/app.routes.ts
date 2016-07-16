import { provideRouter, RouterConfig } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

//the component that's initially loaded by the path '' can't be AppComponent, otherwise everything will load twice. It must be something like Home (or LandingPage)
export const routes: RouterConfig = [
  { path: '', component: LandingPageComponent}
];

//this will be imported in main.ts and passed into bootstrap(). Important to only bootstrap APP_ROUTER_PROVIDERS and not provideRouter().
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
