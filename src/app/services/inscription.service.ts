import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id?: number;
  title: string;
  description: string;
  director: string;
  year: number | null;
  genre: string;
  duration: number | null;
  imageUrl: string;
  available: boolean;
  releaseDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:8081/api/movies';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getAllIncludingDeleted(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/all`);
  }

  getById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  update(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${id}`, movie);
  }

  restore(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/restore/${id}`, {});
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
