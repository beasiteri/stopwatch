import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.justify-content') justifyContent = 'center';

  time = 0;
  numbers: string[] = [];
  isMobile: boolean = window.innerWidth <= 600;

  ngOnInit(): void {
    this.calculateNumbers();
  }

  calculateHourHandAngle(): number {
    const hours = (this.time / (1000 * 60 * 60)) % 12;
    return ((hours / 12) * 360) - 180;
  }

  calculateMinuteHandAngle(): number {
    const minutes = (this.time / (1000 * 60)) % 60;
    return ((minutes / 60) * 360) - 180;
  }

  calculateSecondHandAngle(): number {
    return (((this.time % 60000) / 60000) * 360) - 180;
  }

  calculateNumbers(): void {
    const numberCount = 60;
    const angleIncrement = 360 / numberCount;
    let angle = -90;

    for (let i = 0; i < numberCount; i++) {
      const value = (i % 60 === 0 ? 60 : i % 60).toString().padStart(2, '0');
      this.numbers.push(value);
      angle += angleIncrement;
    }
  }
}
