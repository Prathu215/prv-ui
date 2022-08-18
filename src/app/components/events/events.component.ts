import { Component, OnInit } from "@angular/core";
import { HttpAppService } from "src/app/services/http.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"],
})
export class EventsComponent implements OnInit {
  public currentDate = new Date();
  public eventList: any;
  constructor(private httpAppService: HttpAppService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.httpAppService.getEvents().subscribe((response: any) => {
      this.eventList = response.data;
      console.log(response);
    });
  }

  isUpcomingEvent(event) {
    const event_date = new Date(event.attributes.event_date);
    const event_expire = new Date(event.attributes.event_expire);
    if (event_date < this.currentDate && event_expire > this.currentDate) {
      return "Event going on";
    }
    if (event_date > this.currentDate) {
      return "Upcoming Event";
    }
    return "Event Expired";
  }

  trimDescription(desc: string) {
    return desc.substring(0, 200) + "...";
  }
}
