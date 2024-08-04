import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule,ColorPickerModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css'
})
export class ColorPickerComponent {
 color='#127bdc'
}
