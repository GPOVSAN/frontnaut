import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponentDataService {
  private urlAPI='https://api.themoviedb.org/3/movie/popular?api_key=d6c95d33915804be452df6b1d3b6fc74&language=en-US&page=1';

  constructor(private http:HttpClient) { }
  getAllMovies():Observable <any>{ 
    return this.http.get<any>(this.urlAPI);   
  }
}
