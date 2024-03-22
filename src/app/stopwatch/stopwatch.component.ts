import { Component, OnInit } from '@angular/core';
import { TimeFormatService } from './services/time-format.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {
  time = 0;
  numbers: string[] = [];
  laps: number[] = [];
  intervalId: ReturnType<typeof setTimeout> | undefined;
  isRunning: boolean = false;

  constructor(private timeFormatService: TimeFormatService) { }

  handleStartStopClicked(): void {
    if (this.isRunning) {
      this.stop();
    } else {
      this.start();
    }
  }

  start(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.time += 10;
      }, 10);
    }
  }

  stop(): void {
    if (this.isRunning) {
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  }

  handleResetClicked(): void {
    clearInterval(this.intervalId);
    this.time = 0;
    this.isRunning = false;
  }

  handleLapClicked(): void {
    this.laps.push(this.time);
  }

  handleClearLapClicked(): void {
    this.laps = [];
  }

  formatTime(milliseconds: number): string {
    return this.timeFormatService.formatTime(milliseconds);
  }
}
