import { PasswordFormService } from './password-form.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { PasswordStrength } from './password-form.types';
import { PasswordStrengthComponent } from "../password-strength/password-strength.component";

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [FormInputComponent, ReactiveFormsModule, PasswordStrengthComponent],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.scss',
})
export class PasswordFormComponent implements OnInit {
  passwordFormService = inject(PasswordFormService);

  strength: PasswordStrength = 'empty';
  public formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      password: '',
    });
  }

  ngOnInit() {
    this.formGroup.get('password')?.valueChanges.subscribe((value) => {
      this.passwordFormService
        .checkPasswordStrength(value)
        .subscribe((strength) => {
          this.strength = strength;
        });
    });
  }
}
