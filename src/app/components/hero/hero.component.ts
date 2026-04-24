import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  iniciarSuscripcion() {
    alert('¡Bienvenido a CineMax! Comienza tu prueba gratuita de 30 días');
  }

  verTrailer() {
    alert('Reproduciendo trailer de contenido destacado...');
  }
}
