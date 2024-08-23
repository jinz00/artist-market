import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calcolatori',
  templateUrl: './calcolatori.component.html',
  styleUrls: ['./calcolatori.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalcolatoriComponent {
  constructor(private router: Router) { }

  navigateToCalcolatoreSemplice() {
    this.router.navigate(['/calcolatore-semplice']);
  }
  
  navigateToCalcolatoreVizi() {
    this.router.navigate(['/calcolatore-vizi']);
  }
  navigateToCalcolatoreComplesso() {
    this.router.navigate(['/calcolatore-complesso']);
  }
}
