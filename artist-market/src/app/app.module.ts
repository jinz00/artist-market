import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparatoreLavoroComponent } from './comparatore-lavoro/comparatore-lavoro.component';
import { ComparatoriComponent } from './comparatori/comparatori.component';



@NgModule({
  declarations: [
    AppComponent,
    ComparatoreLavoroComponent,
    ComparatoriComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
