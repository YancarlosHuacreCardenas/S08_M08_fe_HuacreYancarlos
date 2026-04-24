import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private elementRef: ElementRef) {}

  scrollTo(sectionId: string) {
    const element = this.elementRef.nativeElement.ownerDocument.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
