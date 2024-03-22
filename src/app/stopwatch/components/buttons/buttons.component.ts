import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  @Input() time = 0;
  @Input() isRunning = false;
  @Output() startStopClicked = new EventEmitter<boolean>();
  @Output() resetClicked = new EventEmitter<void>();
  @Output() lapClicked = new EventEmitter<void>();
  @Output() clearLapClicked = new EventEmitter<void>();

  toggleStartStop(): void {
    this.startStopClicked.emit(this.isRunning);
  }

  reset(): void {
    this.resetClicked.emit();
  }

  lap(): void {
    this.lapClicked.emit();
  }

  clearLaps(): void {
    this.clearLapClicked.emit();
  }
}
