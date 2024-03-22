import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { StopwatchComponent } from './stopwatch.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LapsComponent } from './laps/laps.component';
import { TimerComponent } from './timer/timer.component';

describe('StopwatchComponent', () => {
  let component: StopwatchComponent;
  let fixture: ComponentFixture<StopwatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopwatchComponent, ButtonsComponent, LapsComponent, TimerComponent],
    });
    fixture = TestBed.createComponent(StopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start the stopwatch and increase time', fakeAsync(() => {
    const initialTime = component.time;
    const button = fixture.debugElement.nativeElement.querySelector('.start-stop-btn');

    button.click();
    tick(1000);

    expect(component.time).toBeGreaterThan(initialTime);

    button.click();
  }));

  it('should pause the stopwatch and stop increasing time', fakeAsync(() => {
    const initialTime = component.time;
    const button = fixture.debugElement.nativeElement.querySelector('.start-stop-btn');

    button.click();
    tick(1000);
    button.click();
    const pausedTime = component.time;

    tick(2000);

    expect(component.time).toEqual(pausedTime);
  }));

  it('should reset the stopwatch to 0 and stop time', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector('.reset-btn');

    component.start();
    tick(1000);

    button.click();

    expect(component.time).toBe(0);
  }));

  it('should respond correctly to button clicks', () => {
    const startStopButton = fixture.debugElement.nativeElement.querySelector('.start-stop-btn');
    const resetButton = fixture.debugElement.nativeElement.querySelector('.reset-btn');
    const lapButton = fixture.debugElement.nativeElement.querySelector('.lap-btn');
    const clearLapButton = fixture.debugElement.nativeElement.querySelector('.clear-lap-btn');

    startStopButton.click();
    expect(component.isRunning).toBe(true);

    resetButton.click();
    expect(component.time).toBe(0);
    expect(component.isRunning).toBe(false);

    lapButton.click();
    expect(component.laps.length).toBe(1);

    clearLapButton.click();
    expect(component.laps.length).toBe(0);
  });

  it('should handle pressing start button multiple times', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector('.start-stop-btn');

    button.click();
    tick(1000);

    const timeAfterFirstClick = component.time;
    expect(timeAfterFirstClick).toBeGreaterThan(0);

    button.click();
    const timeAfterSecondClick = component.time;
    expect(timeAfterSecondClick).toBe(timeAfterFirstClick);

    button.click();
    tick(1000);

    const timeAfterThirdClick = component.time;
    expect(timeAfterThirdClick).toBeGreaterThan(timeAfterSecondClick);

    button.click();
  }));
});
