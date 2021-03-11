import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:65094/api";
  readonly PhotoUrl = "http://localhost:65094/Photos/";

  constructor(private http:HttpClient) { }

  getMovies():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Movies');
  }
  getMoreMovies():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ViewMoreFeatures');
  }

  rateMovie(val:any){
    return this.http.put(this.APIUrl+'/Movies',val);
  }

}

