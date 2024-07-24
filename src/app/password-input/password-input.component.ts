import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { PasswordStrength } from './password-input.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
})
export class PasswordInputComponent {
  @Input() password: string = '';
  passwordStrength: PasswordStrength = 'empty';

  checkPasswordStrength() {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (this.password.length === 0) {
      this.passwordStrength = 'empty';
      return;
    }

    if (this.password.length < 8) {
      this.passwordStrength = 'short';
      return;
    }

    if (hasLetters && hasDigits && hasSymbols) {
      this.passwordStrength = 'strong';
      return;
    }

    if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      this.passwordStrength = 'medium';
      return;
    }

    this.passwordStrength = 'easy';
  }
}
