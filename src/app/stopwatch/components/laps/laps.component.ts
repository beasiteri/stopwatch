import { Component, Input } from '@angular/core';
import { TimeFormatService } from '../../services/time-format.service';

@Component({
  selector: 'app-laps',
  templateUrl: './laps.component.html',
  styleUrls: ['./laps.component.scss']
})
export class LapsComponent {
  @Input() laps: number[] = [];

  constructor(private timeFormatService: TimeFormatService) { }

  formatTime(milliseconds: number): string {
    return this.timeFormatService.formatTime(milliseconds);
  }
}
