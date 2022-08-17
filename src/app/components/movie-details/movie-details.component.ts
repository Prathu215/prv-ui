import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movieDetails : any ;
  constructor(private router: ActivatedRoute,
    private httpAppService: HttpAppService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params:any) => {
      console.log(params);
      this.getMovieDetails(params.slug);
    })
  }

  getMovieDetails(id: any) {
    this.httpAppService.getMovieDetails(id).subscribe((response: any) => {
      this.movieDetails = response.data[0];
      console.log(response);
    });
  }

}
