import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

 
  constructor(private service:SharedService) { }

  MoviesList:any=[];

  ModalTitle:string;
  ActivateEditMoviesComp:boolean=false;
  movies:any;
  MoviesTitleFilter:string="";
  RatingsFilter:string="";
  YearsFilter:string="";
  MoviesListWithoutFilter:any=[];
  ImagesList:any=[];

  ngOnInit(): void {
  }
  
  refreshMoviesList(){
    this.service.getMovies().subscribe(data=>{
      this.MoviesList=data;
      this.MoviesListWithoutFilter=data;
    });
}
refreshMoreMoviesList(){
  this.service.getMoreMovies().subscribe(data=>{
    this.MoviesList=data;
    this.MoviesListWithoutFilter=data;
  });
}


  rateClick(item){
    this.movies=item;
    this.ModalTitle="Rate movie";
    this. ActivateEditMoviesComp=true;
  }
  closeClick(){
    this.ActivateEditMoviesComp=false;
    this.refreshMoviesList();
  }


SearchFn(){
  var MoviesTitleFilter = this.MoviesTitleFilter;
  var RatingsFilter = this.RatingsFilter;
  this.MoviesList = this.MoviesListWithoutFilter.filter(function (el){
      return el.title.toString().toLowerCase().includes(
        MoviesTitleFilter.toString().trim().toLowerCase()
      ) 
  });
}

SearchFn2(){
  var YearsFilter = this.YearsFilter;
  this.MoviesList = this.MoviesListWithoutFilter.filter(function (el){
      return el.releaseDate.toString().toLowerCase().includes(
        YearsFilter.toString().trim().toLowerCase()
      )
  });
}

SearchFn1(){
  var RatingsFilter = this.RatingsFilter;

  this.MoviesList = this.MoviesListWithoutFilter.filter(function (el){
      return el.ratings.toString().toLowerCase().includes(
        RatingsFilter.toString().trim().toLowerCase()
      )
  });
}
}
