import { Component, OnInit } from '@angular/core';
import { HttpAppService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  public movieList: any;
  public movieFilter: FormGroup;
  ratingArray = ["Blockbuster", "Hit", "Average", "Below Average", "Flop"];

  typeArray = ["Cover Songs", "Web Series", "Short Films", "Movies"];

  starRatings = [
    {
      key: "👎",
      value: "0.0",
    },
    {
      key: "½",
      value: "0.5",
    },
    {
      key: "★",
      value: "1.0",
    },
    {
      key: "★½",
      value: "1.5",
    },
    {
      key: "★★",
      value: "2.0",
    },

    {
      key: "★★½",
      value: "2.5",
    },

    {
      key: "★★★",
      value: "3.0",
    },

    {
      key: "★★★½",
      value: "3.5",
    },
    {
      key: "★★★★",
      value: "4.0",
    },
    {
      key: "★★★★½",
      value: "4.5",
    },
    {
      key: "★★★★★",
      value: "5.0",
    },
  ];

  constructor(
    private fb: FormBuilder,
    private httpAppService: HttpAppService
  ) {}

  ngOnInit(): void {
    this.getMovies();

    this.movieFilter = this.fb.group({
      title: [null],
      rating: [null],
      type: [null],
      release_date: [null],
      star_rating: [null],
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

  filter(model) {
    console.log(model);
    const query = this.searchQuery();
    this.httpAppService.getMoviesByFilter(query).subscribe((response: any) => {
      this.movieList = response.data;
      console.log(response);
    });
  }

  get form() {
    return this.movieFilter.controls;
  }

  searchQuery() {
    const filter = "filters[{key}][$eq]={value}";
    let query = [];
    for (let key in this.movieFilter.value) {
      if (key && this.movieFilter.value[key]) {
        const q = filter
          .replace("{key}", key)
          .replace("{value}", this.movieFilter.value[key]);
        query.push(q);
      }
    }
    console.log(query.join("&"));
    return query.join("&");
  }
}



