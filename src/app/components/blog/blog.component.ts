import { Component, OnInit } from "@angular/core";
import { HttpAppService } from "src/app/services/http.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  public blogList: any;
  constructor(private httpAppService: HttpAppService) {}

  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs() {
    this.httpAppService.getBlogs().subscribe((response: any) => {
      this.blogList = response.data;
      console.log(response);
    });
  }
}
