import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  data:any = [];
  http = inject(HttpClient);

  constructor() {
    this.loadUserss();
  }

  loadUserss = () => {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
      (data: any) => {
        this.data = data;
      }
    )
  }
}
