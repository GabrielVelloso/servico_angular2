import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import {CallService} from './teste/cal.service';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
