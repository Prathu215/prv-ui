import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { REST_URLS } from "../constants/rest-urls.constant";


@Injectable({
  providedIn: "root",
})
export class HttpAppService {
  constructor(public http: HttpClient) {}
  contactMe(body) {
    return this.http.post(environment.apiHost+REST_URLS.contactMe, body);
  }

  getBlogs(){
    return this.http.get(environment.apiHost+REST_URLS.getBlogs);
  }

  getBlogDetails(slug : any){
    return this.http.get(environment.apiHost+REST_URLS.getBlogDetails.replace("{slug}",slug));
  }

}
