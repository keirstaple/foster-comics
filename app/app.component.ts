import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a [routerLink]="['']">Home</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [LandingPageComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}
