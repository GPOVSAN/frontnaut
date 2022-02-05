import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from 'src/app/component-data.service';
import { MoviesI } from 'src/app/movies.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

  movies: MoviesI[] | undefined;
  constructor (private datasvc: ComponentDataService){}
  ngOnInit()  {
  this.datasvc.getAllMovies().subscribe(data => console.log(data));
   this.datasvc.getAllMovies().subscribe(
    result => {
      this.movies = result.results;
      console.log(result.results)
    },
    error => {
      const errorMessage = <any>error;
      console.error(errorMessage);
    }
  );
  }
  filtroMovie = '';

 
}



