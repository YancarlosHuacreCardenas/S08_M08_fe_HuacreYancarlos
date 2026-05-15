import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService, Movie } from '../../services/inscription.service';

@Component({
  selector: 'app-inscription-crud',
  standalone: false,
  templateUrl: './inscription-crud.component.html',
  styleUrl: './inscription-crud.component.css'
})
export class InscriptionCrudComponent implements OnInit {

  movies: Movie[] = [];
  movieForm!: FormGroup;
  editing = false;
  editingId: number | null = null;
  showForm = false;
  loading = false;
  showAll = true;

  constructor(
    private movieService: MovieService,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  initForm(): void {
    this.movieForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.maxLength(500)]],
      director: ['', [Validators.required]],
      year: [null, [Validators.min(1888), Validators.max(new Date().getFullYear() + 5)]],
      genre: ['', [Validators.required]],
      duration: [null, [Validators.min(1)]],
      imageUrl: ['', [Validators.pattern('https?://.+')]],
      available: [true],
      releaseDate: ['']
    });
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
    this.movieForm.reset({ available: true });
  }

  editMovie(m: Movie): void {
    this.showForm = true;
    this.editing = true;
    this.editingId = m.id!;
    this.movieForm.patchValue({
      title: m.title,
      description: m.description,
      director: m.director,
      year: m.year,
      genre: m.genre,
      duration: m.duration,
      imageUrl: m.imageUrl,
      available: m.available,
      releaseDate: m.releaseDate
    });
  }

  save(): void {
    if (this.movieForm.invalid) {
      this.movieForm.markAllAsTouched();
      return;
    }

    const movieData: Movie = this.movieForm.value;

    if (this.editing && this.editingId !== null) {
      this.movieService.update(this.editingId, movieData).subscribe({
        next: () => {
          this.loadMovies();
          this.cancelForm();
        },
        error: (err) => console.error('Error updating', err)
      });
    } else {
      this.movieService.create(movieData).subscribe({
        next: () => {
          this.loadMovies();
          this.cancelForm();
        },
        error: (err) => console.error('Error creating', err)
      });
    }
  }

  deleteMovie(id: number): void {
    this.loading = true;
    this.movieService.delete(id).subscribe({
      next: () => {
        this.loadMovies();
      },
      error: (err) => {
        console.error('Error al desactivar:', err);
        this.loading = false;
      }
    });
  }

  restoreMovie(id: number): void {
    this.loading = true;
    this.movieService.restore(id).subscribe({
      next: () => {
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
    this.movieForm.reset({ available: true });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.movieForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  goBack(): void {
    window.history.back();
  }
}
