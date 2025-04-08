import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import {RecordService} from './record.service';
import {FormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [RecordService,
    provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
