import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movieData: any;
  constructor(private movieService: MoviesService, public actRoute: ActivatedRoute) { }
id = this.actRoute.snapshot.params['id'];
  ngOnInit() {
    this.movieService.getMovieById(this.id).subscribe(response => {
      this.movieData = response;
    });
  }

}
