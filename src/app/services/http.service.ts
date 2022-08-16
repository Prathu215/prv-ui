import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map,tap, Observable, of, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { REST_URLS } from "../constants/rest-urls.constant";

@Injectable({
  providedIn: "root",
})
export class HttpAppService {

  public responseCache = new Map();
  public showSpinner = new Subject();
  constructor(public http: HttpClient) {}

  contactMe(body) {
    return this.http.post(REST_URLS.contactMe, body);
  }

  getBlogs() {
    return this.apiCacheRequest(REST_URLS.getBlogs);
  }

  getBlogDetails(slug: any) {
    return this.apiCacheRequest(
      REST_URLS.getBlogDetails.replace("{slug}", slug)
    );
  }

  apiCacheRequest(url) {
    const cache = this.responseCache.get(url);
    if (cache) {
      return of(cache);
    }
    return this.http.get(url).pipe(tap((data)=>this.responseCache.set(url,data)))
    
  }

  getProfile(){
    return this.apiCacheRequest(REST_URLS.getProfile);
  }

  getEvents() {
    return this.apiCacheRequest(REST_URLS.getEvents);
  }

  getEventDetails(slug: any) {
    return this.apiCacheRequest(
      REST_URLS.getEventDetails.replace("{slug}", slug)
    );
  }

}
