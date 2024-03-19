import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {
  time = 0;

  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.justify-content') justifyContent = 'center';

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
}
