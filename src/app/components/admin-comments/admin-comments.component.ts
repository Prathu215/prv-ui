import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-comments',
  templateUrl: './admin-comments.component.html',
  styleUrls: ['./admin-comments.component.css']
})
export class AdminCommentsComponent implements OnInit {
commentList : any=[];
  constructor(private httpService : HttpAppService,
    public router: Router) { }

  ngOnInit(): void {
    this.getComments();
  }
getComments(){
this.httpService.getCommentList().subscribe((res:any) =>{
this.commentList =res.data;
console.log(res);
});
}

updateStatus(id,status:string){
  const body = {
    "data": {
      "status":status 
   
    }
  };
  this.httpService.updateCommentStatus(id,body).subscribe((res) =>{
    this.getComments();
    console.log(res);
    });
}

logout(){
  sessionStorage.removeItem('isUserLogin');
  this.router.navigate(["home"]);
}

}
