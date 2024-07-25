import { Component } from '@angular/core';
import {
  ReactiveFormsModule
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormInputComponent } from './form-input/form-input.component';
import { PasswordFormComponent } from './password-form/password-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    ReactiveFormsModule,
    FormInputComponent,
    PasswordFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Test Task';
}
