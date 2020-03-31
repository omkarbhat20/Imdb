import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title: string;
  data: any = [];
  movieDetails: any =[] ;
  movieName: any;
  editMovie: Title;
  showModal: boolean;
  movieData: any;

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.getMovieName(this.title);
  }

  getMovieName(title) {
    this.moviesService.movieSearch(title).subscribe((response: any) => {
      this.data = response.Search;
    });
  }
}
