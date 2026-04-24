import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: false,
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  plans = [
    {
      nombre: 'Básico',
      precio: '$4.99',
      descripcion: 'Perfecto para empezar',
      popular: false,
      features: ['HD 720p', '1 pantalla', 'Sin anuncios', 'Acceso a catálogo completo']
    },
    {
      nombre: 'Premium',
      precio: '$9.99',
      descripcion: 'La mejor experiencia',
      popular: true,
      features: ['4K HDR', '4 pantallas simultáneas', 'Sin anuncios', 'Descarga contenido', 'Audio Dolby Atmos']
    },
    {
      nombre: 'Familiar',
      precio: '$14.99',
      descripcion: 'Ideal para toda la familia',
      popular: false,
      features: ['4K HDR', '6 pantallas', 'Perfiles separados', 'Control parental', 'Acceso exclusivo a estrenos']
    }
  ];

  seleccionarPlan(nombrePlan: string) {
    alert(`¡Excelente! Has seleccionado el plan ${nombrePlan}. Procediendo al registro...`);
  }
}
