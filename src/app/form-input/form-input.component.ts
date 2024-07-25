import { ChangeDetectorRef, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    }
  ],
})
export class FormInputComponent implements ControlValueAccessor {
  value: string = '';
  @Input() label: string = '';
  @Input() type: 'text' | 'password' | 'email' = 'text';

  public onChange: (value: string) => void = () => {};
  public onTouched: (value: string) => void = () => {};

  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    this.value = value;
    this.onChange(value);
    this.onTouched(value);
  }

  public writeValue(value: string): void {
    this.value = value;

    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: (value: string) => void): void {
    this.onTouched = fn;
  }
}
