import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {
  time = 0;

  calculateHourHandAngle(): number {
    const hours = (this.time / (1000 * 60 * 60)) % 12;
    return ((hours / 12) * 360) - 180;
  }

  calculateMinuteHandAngle() { }

  calculateSecondHandAngle() { }
}
