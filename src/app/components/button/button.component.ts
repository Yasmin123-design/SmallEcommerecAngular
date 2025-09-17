// button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() isLoading: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.isLoading) {
      this.onClick.emit();
    }
  }
}
