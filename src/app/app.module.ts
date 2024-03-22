import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ButtonsComponent } from './stopwatch/components/buttons/buttons.component';
import { TimeFormatService } from './stopwatch/services/time-format.service';
import { LapsComponent } from './stopwatch/components/laps/laps.component';
import { TimerComponent } from './stopwatch/components/timer/timer.component';
import { WatchHandsComponent } from './stopwatch/components/watch-hands/watch-hands.component';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    ButtonsComponent,
    LapsComponent,
    TimerComponent,
    WatchHandsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TimeFormatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
