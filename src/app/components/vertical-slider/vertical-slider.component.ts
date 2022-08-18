import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.css']
})
export class VerticalSliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoWidth: true,
    
    responsive: {
      0: {
        items: 5,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 5,
      },
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
