import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ColorPickerComponent } from "./components/color-picker/color-picker.component";
import { TestComponent } from "./components/test/test.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    // template: `<h1>Hello world!</h1>`,
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ColorPickerComponent, TestComponent]
})
export class AppComponent {
  title = 'home';
}
