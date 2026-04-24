import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../services/inscription.service';

@Component({
  selector: 'app-inscription-crud',
  standalone: false,
  templateUrl: './inscription-crud.component.html',
  styleUrl: './inscription-crud.component.css'
})
export class InscriptionCrudComponent implements OnInit {

  movies: Movie[] = [];
  movie: Movie = this.emptyMovie();
  editing = false;
  editingId: number | null = null;
  showForm = false;
  loading = false;
  showAll = true;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  emptyMovie(): Movie {
    return {
      title: '',
      description: '',
      director: '',
      year: null,
      genre: '',
      duration: null,
      imageUrl: '',
      available: true,
      releaseDate: ''
    };
  }

  loadMovies(): void {
    this.loading = true;
    const request = this.showAll 
      ? this.movieService.getAllIncludingDeleted() 
      : this.movieService.getAll();

    request.subscribe({
      next: (data) => {
        this.movies = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading movies', err);
        this.loading = false;
      }
    });
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
    this.loadMovies();
  }

  openForm(): void {
    this.showForm = true;
    this.editing = false;
    this.editingId = null;
    this.movie = this.emptyMovie();
  }

  editMovie(m: Movie): void {
    this.showForm = true;
    this.editing = true;
    this.editingId = m.id!;
    this.movie = {
      title: m.title,
      description: m.description,
      director: m.director,
      year: m.year,
      genre: m.genre,
      duration: m.duration,
      imageUrl: m.imageUrl,
      available: m.available,
      releaseDate: m.releaseDate
    };
  }

  save(): void {
    if (!this.movie.title || !this.movie.director) {
      return;
    }

    if (this.editing && this.editingId !== null) {
      this.movieService.update(this.editingId, this.movie).subscribe({
        next: () => {
          this.loadMovies();
          this.cancelForm();
        },
        error: (err) => console.error('Error updating', err)
      });
    } else {
      this.movieService.create(this.movie).subscribe({
        next: () => {
          this.loadMovies();
          this.cancelForm();
        },
        error: (err) => console.error('Error creating', err)
      });
    }
  }

  deleteMovie(id: number): void {
    console.log('Intentando desactivar película con ID:', id);
    this.loading = true;
    this.movieService.delete(id).subscribe({
      next: () => {
        console.log('Desactivación exitosa');
        this.loadMovies();
      },
      error: (err) => {
        console.error('Error al desactivar:', err);
        this.loading = false;
      }
    });
  }

  restoreMovie(id: number): void {
    console.log('Intentando restaurar película con ID:', id);
    this.loading = true;
    this.movieService.restore(id).subscribe({
      next: () => {
        console.log('Restauración exitosa');
        this.loadMovies();
      },
      error: (err) => {
        console.error('Error al restaurar:', err);
        this.loading = false;
      }
    });
  }

  cancelForm(): void {
    this.showForm = false;
    this.editing = false;
    this.editingId = null;
    this.movie = this.emptyMovie();
  }

  goBack(): void {
    window.history.back();
  }
}
