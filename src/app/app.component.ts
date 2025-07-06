import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Counter';
  public counter: number = 0;

  public count(number: number): void {
    if (this.counter === 0 && number < 0) return;
    this.counter += number;
  }

  public reset(): void {
    this.counter = 0;
  }
}
