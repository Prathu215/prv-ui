import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public foodsDetails : any ;
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
      this.getFoodsDetails(params.slug,true);
    })
  }
  get form() { return this.commentForm.controls; }

  getFoodsDetails(id: any, cache:boolean) {
    this.httpAppService.getFoodsDetails(id,cache).subscribe((response: any) => {
      this.foodsDetails = response.data[0];
      console.log(response);
    });
  }
  addComment() {
    console.log(this.commentForm.value);
    const body = {
      "data": {
        "name": this.commentForm.value.name,
        "description": this.commentForm.value.description,
        "food": {
          "id": this.foodsDetails.id
        }
      }
    }
    this.httpAppService.addMovieComment(body).subscribe((res) => {
      this.getFoodsDetails(this.foodsDetails.attributes.slug,false);
      this.commentForm.reset();
    })
  }

  sortCommentByDate(obj: Array<any>) {
    return obj.sort((a: any, b: any) => {
      return <any>new Date(b.attributes.createdAt) - <any>new Date(a.attributes.createdAt);
    });
  }
 
}
