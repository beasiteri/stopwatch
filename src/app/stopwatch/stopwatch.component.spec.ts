import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { StopwatchComponent } from './stopwatch.component';

describe('StopwatchComponent', () => {
  let component: StopwatchComponent;
  let fixture: ComponentFixture<StopwatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopwatchComponent]
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
});
