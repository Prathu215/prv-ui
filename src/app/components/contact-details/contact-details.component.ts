import { Component, OnInit } from '@angular/core';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.css"],
})
export class ContactDetailsComponent implements OnInit {
  messageList: any = [];
  isModalOpen:boolean=false;
  modalContent:any;
  constructor(public httpAppService: HttpAppService) {}

  ngOnInit(): void {
    this.getContactMessages();
  }

  getContactMessages() {
    this.httpAppService.getContactMessages().subscribe(
      (response: any) => {
        console.log(response);
        this.messageList = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get getUnreadMessages() {
    const unReadMessageLength = this.messageList.filter(
      (item) => !item.attributes?.isReaded
    );
    return unReadMessageLength.length ? unReadMessageLength.length : 0;
  }

  trimDescription(desc: string) {
    return desc.substring(0, 30) + "...";
  }

  updateContactMessages(item) {
    this.isModalOpen=true;
    this.modalContent=item.attributes;
    if (item.attributes.isReaded) {
      return;
    }
    const body = {
      data: {
        isReaded: true,
        id: item.id,
      },
    };
    item.attributes.isReaded=true;

    this.httpAppService.updateContactMessages(item.id, body).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  closeModal(){
    this.isModalOpen=false;
  }

}
