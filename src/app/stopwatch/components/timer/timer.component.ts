import { Component, Input } from '@angular/core';
import { TimeFormatService } from '../../services/time-format.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  @Input() milliseconds: number = 0;

  constructor(private timeFormatService: TimeFormatService) { }

  formatTime(milliseconds: number): string {
    return this.timeFormatService.formatTime(milliseconds);
  }
}
