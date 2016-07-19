import { Component } from '@angular/core';
import { Auth }      from './auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: 'app/signup.template.html',
  directives: [ ROUTER_DIRECTIVES]
})

export class SignupComponent {
  constructor(private auth: Auth) {}
};
