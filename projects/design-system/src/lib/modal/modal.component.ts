import { CommonModule } from '@angular/common';
import { Component, HostListener, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'gamidas-modal',
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  public visible: InputSignal<boolean> = input<boolean>(false);
  public close: OutputEmitterRef<void> = output<void>();

  closeModal(): void {
    this.close.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapePress(event: KeyboardEvent): void {
    if (this.visible()) {
      this.closeModal();
    }
  }

}
