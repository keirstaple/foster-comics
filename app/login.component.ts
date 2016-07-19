import { Component } from '@angular/core';
import { Auth }      from './auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'app/login.template.html',
  directives: [ ROUTER_DIRECTIVES ]
})

export class LoginComponent {
  constructor(private auth: Auth) {}
};
