import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PasswordStrength } from '../password-form/password-form.types';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss'
})
export class PasswordStrengthComponent {
  @Input() passwordStrength: PasswordStrength = 'empty';
}
