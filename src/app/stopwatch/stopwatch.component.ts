import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  time = 0;
  numbers: string[] = [];
  isRunning: boolean = false;
  intervalId: ReturnType<typeof setTimeout> | undefined;
  laps: number[] = [];

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

  toggleStartStop(): void {
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

  reset(): void {
    clearInterval(this.intervalId);
    this.time = 0;
    this.isRunning = false;
    this.laps = [];
  }

  lap(): void {
    this.laps.push(this.time);
  }

  clearLaps(): void {
    this.laps = [];
  }

  formatTime(milliseconds: number): string {
    const totalMilliseconds = milliseconds;
    const millisecondsPart = totalMilliseconds % 1000;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}.${this.padMilliseconds(millisecondsPart)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  padMilliseconds(num: number): string {
    return num < 10 ? '00' + num : num < 100 ? '0' + num : num.toString();
  }
}
