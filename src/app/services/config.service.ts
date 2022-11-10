import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { REST_URLS } from '../constants/rest-urls.constant';
@Injectable()
export class AppConfigService {
  CONFIG_URL = REST_URLS.getProfile;
  private user =  sessionStorage.getItem("userInfo");
  private getUserconfiguration: Observable<any>;
  constructor(private httpClient: HttpClient) {

  }
  public get getConfig() {
    return this.user;
  }
  public load(): any {
    if (!this.getUserconfiguration && !this.user) {
      this.getUserconfiguration = this.httpClient.get<any>(this.CONFIG_URL).pipe(
        shareReplay(1),
        tap(data => {
          this.user = data;
          sessionStorage.setItem("userInfo", JSON.stringify(data));
        })
      );
    } else{
        this.getUserconfiguration =  of(this.user)
    }
    return this.getUserconfiguration;
}
}