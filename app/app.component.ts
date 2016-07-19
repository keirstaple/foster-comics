import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { CharacterBiosComponent } from './character-bios.component';
import { AboutAuthorComponent } from './about-author.component';
import { StoreComponent } from './store.component';
import { ShoppingCartComponent } from './shopping-cart.component';
// import { Auth } from './auth.service';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a [routerLink]="['']">Home</a>
      <a [routerLink]="['character-bios']">Character Bios</a>
      <a [routerLink]="['about-author']">About Author</a>
      <a [routerLink]="['store']">Store</a>
      <a [routerLink]="['shopping-cart']">Shopping Cart</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [LandingPageComponent, ROUTER_DIRECTIVES],
  providers: [ ]
})

export class AppComponent {

}
