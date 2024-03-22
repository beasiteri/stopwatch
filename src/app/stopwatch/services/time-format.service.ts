import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeFormatService {
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

  private pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  private padMilliseconds(num: number): string {
    return num < 10 ? '00' + num : num < 100 ? '0' + num : num.toString();
  }
}
