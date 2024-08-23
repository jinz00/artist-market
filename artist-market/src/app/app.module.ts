import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparatoreLavoroComponent } from './comparatore-lavoro/comparatore-lavoro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import {LayoutModule} from '@angular/cdk/layout';
import { CalcolatoriComponent } from './calcolatori/calcolatori.component';
import { CalcolatorePagaSempliceComponent } from './calcolatore-paga-semplice/calcolatore-paga-semplice.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { VicesCalculatorComponent } from './vices-calculator/vices-calculator.component';
registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    ComparatoreLavoroComponent,
    CalcolatoriComponent,
    CalcolatorePagaSempliceComponent,
    VicesCalculatorComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'it' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
