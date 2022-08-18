import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movieDetails : any ;
  commentForm: FormGroup; 
  constructor(private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private httpAppService: HttpAppService) { }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      name: ['',  Validators.required],
      description: ['', Validators.required]
    });
    this.router.params.subscribe((params:any) => {
      console.log(params);
      this.getMovieDetails(params.slug,true);
    })
  }
  get form() { return this.commentForm.controls; }

  getMovieDetails(id: any, cache:boolean) {
    this.httpAppService.getMovieDetails(id,cache).subscribe((response: any) => {
      this.movieDetails = response.data[0];
      console.log(response);
    });
  }
  addComment() {
    console.log(this.commentForm.value);
    const body = {
      "data": {
        "name": this.commentForm.value.name,
        "description": this.commentForm.value.description,
        "movie": {
          "id": this.movieDetails.id
        }
      }
    }
    this.httpAppService.addMovieComment(body).subscribe((res) => {
      this.getMovieDetails(this.movieDetails.attributes.slug,false);
    })
  }

  sortCommentByDate(obj: Array<any>) {
    return obj.sort((a: any, b: any) => {
      return <any>new Date(b.attributes.createdAt) - <any>new Date(a.attributes.createdAt);
    });
  }
}
