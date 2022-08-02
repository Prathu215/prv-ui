import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { REST_URLS } from "../constants/rest-urls.constant";

@Injectable({
  providedIn: "root",
})
export class HttpAppService {
  constructor(public http: HttpClient) {}
  contactMe(body) {
    return this.http.post(REST_URLS.contactMe, body);
  }

  getBlogs(){
    return this.http.get(REST_URLS.getBlogs);
  }
}
