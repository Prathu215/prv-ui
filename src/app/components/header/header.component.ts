import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isProfileVisible:boolean = false;
  public isMenuOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu(){
    this.isMenuOpen = false;
  }
}
