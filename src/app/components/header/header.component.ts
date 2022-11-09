import { Component, Input, OnInit } from '@angular/core';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Input() isProfileVisible: boolean = false;
  public isMenuOpen: boolean = false;
  public userInfo: any;
  constructor(private httpAppService: HttpAppService) {}

  ngOnInit(): void {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo) {
      this.userInfo = userInfo;
    } else {
      this.httpAppService.getProfile().subscribe((response) => {
        this.userInfo = response;
      
        sessionStorage.setItem("userInfo", JSON.stringify(response));
        this.httpAppService.notifyUser.next(true);
      });
    }
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
