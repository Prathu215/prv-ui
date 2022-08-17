import { Component, OnInit } from '@angular/core';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
public movieList : any;
  constructor(private httpAppService: HttpAppService) {}

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() {
    this.httpAppService.getMovies().subscribe((response: any) => {
      this.movieList = response.data;
      console.log(response);
    });
  }

}
