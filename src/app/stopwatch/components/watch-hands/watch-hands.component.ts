import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-watch-hands',
  templateUrl: './watch-hands.component.html',
  styleUrls: ['./watch-hands.component.scss']
})
export class WatchHandsComponent {
  @Input() time: number = 0;

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
