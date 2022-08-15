import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { HttpAppService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prv-ui';
  isProfileOpen = true;
  showLoader: boolean = false;
  constructor(private httpAppService: HttpAppService){

  }
  ngOnInit(): void {
this.httpAppService.showSpinner.pipe(delay(0)).subscribe((response:boolean) =>{
this.showLoader = response;
})
  }
}
