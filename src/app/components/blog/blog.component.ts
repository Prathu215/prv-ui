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
    this.getComments();
  }
  getBlogs() {
    this.httpAppService.getBlogs().subscribe((response: any) => {
      this.blogList = response.data;
      console.log(response);
    });
  }
  trimDescription(desc: string) {
    return desc.substring(0, 100) + "...";
  }
  getComments() {
    this.httpAppService.getCommentList().subscribe((res: any) => {
     
      console.log(res);
      sessionStorage.setItem("comments", JSON.stringify(res.data));
    });
  }


}
