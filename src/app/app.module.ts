import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ButtonsComponent } from './stopwatch/buttons/buttons.component';
import { TimeFormatService } from './stopwatch/services/time-format.service';
import { LapsComponent } from './stopwatch/laps/laps.component';
import { TimerComponent } from './stopwatch/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    ButtonsComponent,
    LapsComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TimeFormatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
