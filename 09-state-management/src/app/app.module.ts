import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HSliderComponent } from './h-slider/h-slider.component';
import { VSliderComponent } from './v-slider/v-slider.component';
import { ProgressWrapperComponent } from './progress-wrapper/progress-wrapper.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MyServiceService} from './service/my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HSliderComponent,
    VSliderComponent,
    ProgressWrapperComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [{provide: 'abc', useClass: MyServiceService}],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
