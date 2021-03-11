import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-star-movie',
  templateUrl: './star-movie.component.html',
  styleUrls: ['./star-movie.component.css']
})
export class StarMovieComponent implements OnInit {
 

  constructor(private service:SharedService) { }

  @Input() movies:any;
  MoviesId:string;
  ratings:number;

  ngOnInit(): void {
    this.MoviesId=this.movies.MoviesId;
    this.ratings=this.movies.ratings;
  }

  rateMovie(){
    var val = {MoviesId:this.MoviesId,
      ratings:this.ratings};
    this.service.rateMovie(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}