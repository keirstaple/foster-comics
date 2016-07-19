import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

//Avoid name not found warnings
declare var Auth0: any;

@Injectable()
export class Auth {
  //Configure auth0
  auth0 = new Auth0({
    domain: 'keirstaple.auth0.com',
    clientID: 'pCjUdeaxBpXQfSCAIRRvjlSCOztGT0pu',
    callbackOnLocationHash: true,
    callbackURL: 'http://localhost:3000/',
  });

}
