import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  public getAuthorizationKey(): string {
    return window.sessionStorage.getItem('token');
  }

  public setAuthorizationKey(token: string) {
    window.sessionStorage.setItem('token', token);
  }

  public removeAuthorizationKey() {
    window.sessionStorage.removeItem('token');
  }

  public getDomain(): string {
    return window.sessionStorage.getItem('domain');
  }

  public setDomain(domain: string) {
    window.sessionStorage.setItem('domain', domain);
  }

  public removeDomain() {
    window.sessionStorage.removeItem('domain');
  }

  public isAuthenticated() {
    if (this.getAuthorizationKey() != null) {
      const promise = new Promise(
        (resolve, reject) => {
          resolve(true);
        }
      );
      return promise;
    } else {
      const promise1 = new Promise(
        (resolve, reject) => {
          resolve(false);
        }
      );

      return promise1;
    }
  }
}
