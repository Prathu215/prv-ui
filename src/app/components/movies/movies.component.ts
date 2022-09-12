import { Component, OnInit } from '@angular/core';
import { HttpAppService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
public movieList : any;
public movieFilter: FormGroup;
ratingArray =[
"Blockbuster",
"Hit",
"Average",
"Below Average",
"Flop"
]

typeArray= [
  "Cover Songs",
  "Web Series",
  "Short Films",
  "Movies"
]

  constructor(private fb: FormBuilder,
    private httpAppService: HttpAppService) {}

  ngOnInit(): void {
    this.getMovies();

    this.movieFilter = this.fb.group({
      title: ["", [Validators.required]],
      rating: [null, [Validators.required]],
      type: [null,[Validators.required]],
      release_date: ["", [Validators.required]],
      star_rating: ["", [Validators.required]],
    });
  }
  getMovies() {
    this.httpAppService.getMovies().subscribe((response: any) => {
      this.movieList = response.data;
      console.log(response);
    });
  }
  trimDescription(desc: string) {
    return desc.substring(0, 100) + "...";
  }

  filter(model){
    console.log(model);
  }

  get form() { 
    return this.movieFilter.controls; 
  }

}



