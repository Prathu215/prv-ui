import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  messageList: any = [];

  constructor(public httpAppService: HttpAppService) {}

  ngOnInit(): void {
    this.getContactMessages();
  }

  getContactMessages() {
    this.httpAppService.getContactMessages().subscribe(
      (response: any) => {
        console.log(response);
        this.messageList = response.data.filter((item) => item.attributes.added_feedbackReview);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
