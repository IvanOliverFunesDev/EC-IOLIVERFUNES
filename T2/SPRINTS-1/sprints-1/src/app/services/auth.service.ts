import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private validEmail = '4dA1Ts_2425@gmail.com';
  private validPassword = '4dA1Ts_2425';

  validateCredentials(email: string, password: string): boolean {
    return email === this.validEmail && password === this.validPassword;
  }
}
