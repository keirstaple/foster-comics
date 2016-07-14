import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { LandingPageComponent } from './landing-page.component';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a [routerLink]="['']">Home</a>
      <a [routerLink]="['sample-form']">Sample Form</a>
      <a [routerLink]="['sticky-smoothScroll']">Sticky-Smooth-Scroll</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [LandingPageComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}
