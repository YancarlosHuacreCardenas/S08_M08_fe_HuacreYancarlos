import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <app-hero></app-hero>
    <app-courses></app-courses>
    <app-benefits></app-benefits>
  `
})
export class HomeComponent {}
