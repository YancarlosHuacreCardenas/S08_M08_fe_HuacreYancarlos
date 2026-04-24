import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  openFAQ: boolean[] = [false, false, false, false];

  toggleFAQ(index: number) {
    this.openFAQ[index] = !this.openFAQ[index];
  }
}
