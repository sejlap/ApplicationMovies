import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowMoviesComponent } from './movies/show-movies/show-movies.component';
import { StarMovieComponent } from './movies/star-movie/star-movie.component';
import { SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ShowMoviesComponent,
    StarMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatSlideToggleModule,
  ],
  exports: [
   
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
