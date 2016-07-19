import { Component } from '@angular/core';
import { Auth }      from './auth.service';

@Component({
  selector: 'signup',
  templateUrl: 'app/signup.template.html'
})

export class SignupComponent {
  constructor(private auth: Auth) {}
};
