import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'gamidas-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  public color: InputSignal<string> = input<string>('white');
  public active: InputSignal<string> = input<string>('');
  public disabled: InputSignal<boolean | null> = input<boolean | null>(false);
}
