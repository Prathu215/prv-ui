import { Component, Input, OnInit } from '@angular/core';
import { HttpAppService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isProfileVisible:boolean = false;
  public isMenuOpen: boolean = false;
  public userInfo: any;
  constructor( private httpAppService: HttpAppService) { 

  }

  ngOnInit(): void {
    this.httpAppService.getProfile().subscribe((response) =>{
this.userInfo =response;
    })
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu(){
    this.isMenuOpen = false;
  }
}
