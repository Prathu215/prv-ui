import { Component, OnInit } from '@angular/core';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
public restaurantList : any;
isUserLogin = JSON.parse(sessionStorage.getItem("isUserLogin"));

 
  constructor(private httpAppService: HttpAppService) {}

  ngOnInit(): void {
    this.getFoodsList();
  }

  getFoodsList() {
    this.httpAppService.getFoods().subscribe((response: any) => {
      this.restaurantList = response.data;
      console.log(response);
    });
  }


  trimDescription(desc: string) {
    return desc.substring(0, 100) + "...";
  }
  
}
