import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: "app-admin-comments",
  templateUrl: "./admin-comments.component.html",
  styleUrls: ["./admin-comments.component.css"],
})
export class AdminCommentsComponent implements OnInit {
  commentList: any = [];
  commentType: string;
  requestTrackerForm: any;
  status: string;
  constructor(
    private httpService: HttpAppService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getComments();
    this.route.queryParams.subscribe((params) => {
      console.log(params["type"]);
      this.commentType = params["type"]?.toUpperCase();
    });

    this.requestTrackerForm = new FormGroup({
      searchText: new FormControl(this.commentType, Validators.required),
    });
  }
  getComments() {
    this.httpService.getCommentList().subscribe((res: any) => {
      this.commentList = res.data;
      console.log(res);
      sessionStorage.setItem("comments", JSON.stringify(res.data));
    });
  }

  updateStatus(id, status: string) {
    const body = {
      data: {
        status: status,
      },
    };
    this.httpService.updateCommentStatus(id, body).subscribe((res) => {
      this.getComments();
      console.log(res);
    });
  }

  logout() {
    sessionStorage.removeItem("isUserLogin");
    this.router.navigate(["home"]);
  }

  getCommentType(item) {
    if (item.attributes.movie.data) {
      return "MOVIE";
    } else if (item.attributes.food.data) {
      return "FOOD";
    } else {
      return "NA";
    }
  }

  delete(id) {
    console.log(id);
    this.httpService.removeComment(id).subscribe((res) => {
      this.getComments();
      console.log(res);
    });
  }

  submit() {
    console.log(this.requestTrackerForm.value);
  }

  changeSearchText(e) {
    console.log(e.target.value);
    this.filterData(e.target.value);
  }

  filterData(value) {
    let comments;
    switch (value) {
      case "ALL":
        this.filterByStatus("ALL");
        break;
      case "MOVIE":
        this.commentType = "MOVIE";
        comments = JSON.parse(sessionStorage.getItem("comments"));
        this.commentList = comments;
        break;
      case "FOOD":
        this.commentType = "FOOD";
        comments = JSON.parse(sessionStorage.getItem("comments"));
        this.commentList = comments;
        break;
      case "PENDING":
        this.filterByStatus("Pending");
        break;
      case "APPROVED":
        this.filterByStatus("Approved");
        break;

      default:
        break;
    }
  }

  filterByStatus(status) {
    this.commentType = "";
    const comments = JSON.parse(sessionStorage.getItem("comments"));

    if (status == "ALL") {
      this.commentList = comments;
      return;
    }
    this.commentList = comments.filter((item) => {
      return item?.attributes?.status == status;
    });
  }
}
