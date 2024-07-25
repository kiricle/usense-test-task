import { Injectable } from '@angular/core';
import { PasswordStrength } from './password-form.types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordFormService {
  constructor() {}

  public checkPasswordStrength(password: string): Observable<PasswordStrength> {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length === 0) {
      return of('empty');
    }

    if (password.length < 8) {
      return of('short');
    }

    if (hasLetters && hasDigits && hasSymbols) {
      return of('strong');
    }

    if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return of('medium');
    }

    return of('easy');
  }
}
