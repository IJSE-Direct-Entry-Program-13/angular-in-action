import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NotBlankDirective } from './not-blank.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    LifeCycleComponent,
    WrapperComponent,
    ReactiveFormComponent,
    NotBlankDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
