import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcolatorePagaSempliceComponent } from './calcolatore-paga-semplice/calcolatore-paga-semplice.component';
import { ComparatoreLavoroComponent } from './comparatore-lavoro/comparatore-lavoro.component';
import { CalcolatoriComponent } from './calcolatori/calcolatori.component';
import { VicesCalculatorComponent } from './vices-calculator/vices-calculator.component';
const routes: Routes = [
  { path: '', component: CalcolatoriComponent },
  { path: 'calcolatore-semplice', component: CalcolatorePagaSempliceComponent },
  { path: 'calcolatore-complesso', component: ComparatoreLavoroComponent },
  { path: 'calcolatore-vizi', component: VicesCalculatorComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
