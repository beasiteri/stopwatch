import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent {
  numbers: string[] = [];

  constructor() {
    this.calculateNumbers();
  }

  calculateNumbers(): void {
    const numberCount = 60;
    for (let i = 0; i < numberCount; i++) {
      const value = (i % 60 === 0 ? 60 : i % 60).toString().padStart(2, '0');
      this.numbers.push(value);
    }
  }
}
