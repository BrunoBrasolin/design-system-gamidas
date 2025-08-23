import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, InputSignal, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'gamidas-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]

})
export class InputComponent {
  public id: InputSignal<string> = input<string>('');
  public name: InputSignal<string> = input<string>('');
  public required: InputSignal<boolean> = input<boolean>(false);
  public type: InputSignal<string> = input<string>('text');
  public modelValue = signal('');


  onChange = (value: string) => { };
  onTouched = () => { };

  writeValue(value: string): void {
    this.modelValue.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const value = target.value;
    this.modelValue.set(value);
    this.onChange(value);
  }
}
