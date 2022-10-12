import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
public restaurantList : any;
isUserLogin = JSON.parse(sessionStorage.getItem("isUserLogin"));
typeArray = ["Indian", "Mexican", "Thai", "Italian", "Mediterranean"];


public restaurantFilter: FormGroup;
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
    this.getFoodsList();

    this.restaurantFilter = this.fb.group({
      restaurant_name: [null],
      restaurant_type: [null],
      restaurant_rating: [null],
    });
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

  filter(model) {
    // console.log(model);
    const query = this.searchQuery();
    console.log(query);
    this.httpAppService.getRestaurantByFilter(query).subscribe((response: any) => {
      this.restaurantList = response.data;
      console.log(response);
    });

  }
  searchQuery() {
    const filter = "filters[{key}][$eq]={value}";
    let query = [];
    for (let key in this.restaurantFilter.value) {
      if (key && this.restaurantFilter.value[key]) {
        let q = filter
          .replace("{key}", key)
          .replace("{value}", this.restaurantFilter.value[key]);
        if (key == "title") {
          q = q.replace("$eq", "$containsi");
        }
        query.push(q);
      }
    }
    console.log(query.join("&"));
    return query.join("&");
  }
  
}
