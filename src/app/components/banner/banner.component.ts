import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images=[
  //   "https://images.pexels.com/photos/59990/sunflowers-sunflower-yellow-petal-59990.jpeg",
  //   "https://images.pexels.com/photos/45911/peacock-plumage-bird-peafowl-45911.jpeg",
  //   "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
  // "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg"
  ]
  slides = JSON.parse(sessionStorage.getItem("userInfo"));
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  

  constructor(private httpAppService: HttpAppService) { }

  ngOnInit(): void {
    this.images = this.slides?this.slides.data.attributes.slider.data:this.images;
    this.httpAppService.notifyUser.subscribe((data) =>{
      this.slides = JSON.parse(sessionStorage.getItem("userInfo"));
      this.images = this.slides?this.slides.data.attributes.slider.data:this.images;
    });
  }


}
