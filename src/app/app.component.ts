import { Component } from '@angular/core';
import { ComponentDataService } from './component-data.service';
import { MoviesI } from './movies.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'proyecto';
FilterPost = '';


}


