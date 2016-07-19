import { provideRouter, RouterConfig } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { CharacterBiosComponent } from './character-bios.component';
import { AboutAuthorComponent } from './about-author.component';
import { StoreComponent } from './store.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { LoginComponent } from './login.component';

//the component that's initially loaded by the path '' can't be AppComponent, otherwise everything will load twice. It must be something like Home (or LandingPage)
export const routes: RouterConfig = [
  { path: '', component: LandingPageComponent },
  { path: 'character-bios', component: CharacterBiosComponent },
  { path: 'about-author', component: AboutAuthorComponent },
  { path: 'store', component: StoreComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

//this will be imported in main.ts and passed into bootstrap(). Important to only bootstrap APP_ROUTER_PROVIDERS and not provideRouter().
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
