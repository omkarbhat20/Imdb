import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  movieSearch(title) {
    const url = 'http://www.omdbapi.com/?apikey=81e855f&s=' + title;
    return this.http.get(url);
  }
  getMovieById(id){
    const url = 'http://www.omdbapi.com/?apikey=81e855f&i=' + id;
    return this.http.get(url);
  }
}
