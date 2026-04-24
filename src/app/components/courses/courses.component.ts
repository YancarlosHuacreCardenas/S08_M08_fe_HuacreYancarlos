import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  // Estrenos
  estrenos = [
    {
      title: 'Velocidad Extrema',
      genre: 'Acción',
      rating: '8.5/10',
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop'
    },
    {
      title: 'Aventura Perdida',
      genre: 'Aventura',
      rating: '8.2/10',
      poster: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop'
    },
    {
      title: 'Crimen en la Sombra',
      genre: 'Thriller',
      rating: '9.0/10',
      poster: 'https://images.unsplash.com/photo-1514306688989-b86151c0378a?w=300&h=450&fit=crop'
    },
    {
      title: 'Corazón Apasionado',
      genre: 'Romance',
      rating: '7.8/10',
      poster: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&h=450&fit=crop'
    },
    {
      title: 'Risa Infinita',
      genre: 'Comedia',
      rating: '8.1/10',
      poster: 'https://images.unsplash.com/photo-1489599849228-ed4dc9ee2b9b?w=300&h=450&fit=crop'
    },
    {
      title: 'Futuros Mundos',
      genre: 'Sci-Fi',
      rating: '8.7/10',
      poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop'
    }
  ];

  // Películas
  movies = [
    {
      title: 'Velocidad Extrema',
      genre: 'Acción',
      rating: '8.5/10',
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop'
    },
    {
      title: 'Aventura Perdida',
      genre: 'Aventura',
      rating: '8.2/10',
      poster: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop'
    },
    {
      title: 'Crimen en la Sombra',
      genre: 'Thriller',
      rating: '9.0/10',
      poster: 'https://images.unsplash.com/photo-1514306688989-b86151c0378a?w=300&h=450&fit=crop'
    },
    {
      title: 'Corazón Apasionado',
      genre: 'Romance',
      rating: '7.8/10',
      poster: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&h=450&fit=crop'
    },
    {
      title: 'Risa Infinita',
      genre: 'Comedia',
      rating: '8.1/10',
      poster: 'https://images.unsplash.com/photo-1489599849228-ed4dc9ee2b9b?w=300&h=450&fit=crop'
    },
    {
      title: 'Futuros Mundos',
      genre: 'Sci-Fi',
      rating: '8.7/10',
      poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop'
    }
  ];

  // Series
  series = [
    {
      title: 'El Detective',
      genre: 'Crimen',
      rating: '9.2/10',
      poster: 'https://images.unsplash.com/photo-1517604931442-71053e683e1f?w=300&h=450&fit=crop'
    },
    {
      title: 'Misterios del Pasado',
      genre: 'Documental',
      rating: '8.8/10',
      poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop'
    },
    {
      title: 'Amor en la Ciudad',
      genre: 'Drama',
      rating: '8.4/10',
      poster: 'https://images.unsplash.com/photo-1512070679635-db38f2cd8f4e?w=300&h=450&fit=crop'
    },
    {
      title: 'Guerreros del Espacio',
      genre: 'Sci-Fi',
      rating: '9.1/10',
      poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&h=450&fit=crop'
    }
  ];

  // Mi Lista
  myList = [
    {
      title: 'Velocidad Extrema',
      genre: 'Acción',
      rating: '8.5/10',
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop'
    },
    {
      title: 'El Detective',
      genre: 'Crimen',
      rating: '9.2/10',
      poster: 'https://images.unsplash.com/photo-1517604931442-71053e683e1f?w=300&h=450&fit=crop'
    }
  ];

  // Datos del formulario
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    plan: '',
    mensaje: ''
  };

  seleccionarPelicula(titulo: string) {
    alert(`¡${titulo} añadida a tu lista de favoritos!`);
  }

  reproducir(titulo: string) {
    alert(`Reproduciendo: ${titulo}`);
  }

  enviarMensaje() {
    if (this.formData.nombre && this.formData.email && this.formData.mensaje) {
      alert(`¡Gracias ${this.formData.nombre}! Tu mensaje ha sido enviado. Te contactaremos pronto en ${this.formData.email}`);
      // Limpiar el formulario
      this.formData = {
        nombre: '',
        email: '',
        telefono: '',
        plan: '',
        mensaje: ''
      };
    } else {
      alert('Por favor completa los campos requeridos');
    }
  }
}
