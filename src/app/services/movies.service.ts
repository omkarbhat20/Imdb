import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movies } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movieSearchUrl = 'http://www.omdbapi.com/?apikey=81e855f&s=';
  private getMovieByIdUrl = 'http://www.omdbapi.com/?apikey=81e855f&i=';

  constructor(private http: HttpClient) { }

  /**
   * Movies search by title
   * @param title string that will include movie title
   * @returns Observable of type Http Response
   */
  movieSearch(title: string) {
    return this.http.get<Observable<Movies>>(this.movieSearchUrl + title)
      .pipe(map((movies: Observable<Movies>) => {
        return movies ? movies : ''
      }));
  }

  /**
   * Gets movie by id
   * @param id number that will be movie id
   * @returns Observable of type Http Response
   */
  getMovieById(id: number) {
    return this.http.get<Observable<Movies>>(this.getMovieByIdUrl + id)
    .pipe(map((movies: Observable<Movies>) => {
      return movies ? movies : ''
    }));
  }

}
