import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { AboutAuthorComponent } from './about-author.component';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a [routerLink]="['']">Home</a>
      <a [routerLink]="['about-author']">About Author</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [LandingPageComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}
