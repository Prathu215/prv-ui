import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
public blogDetails : any ;
  constructor(private router: ActivatedRoute,
    private httpAppService: HttpAppService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params:any) => {
      console.log(params);
      this.getBlogDetails(params.slug);
    })
  }

  getBlogDetails(id: any) {
    this.httpAppService.getBlogDetails(id).subscribe((response: any) => {
      this.blogDetails = response.data[0];
      console.log(response);
    });
  }

}
