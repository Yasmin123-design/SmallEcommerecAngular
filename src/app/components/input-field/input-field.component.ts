// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-input-field',
//   standalone: true,
//   imports: [],
//   templateUrl: './input-field.component.html',
//   styleUrl: './input-field.component.css'
// })
// export class InputFieldComponent {
//   @Input() placeholder: string = '';
//   @Input() type: string = 'text';
//   @Input() value: string = '';
//   @Output() valueChange = new EventEmitter<string>();

//   onInput(event: any) {
//     this.valueChange.emit(event.target.value);
//   }
// }
// input-field.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() icon: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: any) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}
