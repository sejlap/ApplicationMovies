import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarMovieComponent } from './star-movie.component';

describe('StarMovieComponent', () => {
  let component: StarMovieComponent;
  let fixture: ComponentFixture<StarMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
