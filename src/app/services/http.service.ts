import { HttpClient, HttpHeaders } from "@angular/common/http";
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


  getMovies() {
    return this.apiCacheRequest(REST_URLS.getMovies);
  }
  getMoviesByFilter(query) {
    return this.apiCacheRequest(REST_URLS.getMovies+'&' +query);
  }

  getMovieDetails(slug: any, cache: boolean) {
    if (cache) {
      return this.apiCacheRequest(
        REST_URLS.getMovieDetails.replace("{slug}", slug)
      );
    }
    return this.http.get(REST_URLS.getMovieDetails.replace("{slug}", slug))
  }

  addMovieComment(body) {
    return this.http.post(REST_URLS.comments, body)
  }

  getCommentList() {
    return this.http.get(REST_URLS.commentList);
    
  }

  updateCommentStatus(id,body){
  
    return this.http.put(REST_URLS.comments+'/'+id, body);
    
  }

  loginUser(body){
return this.http.post(REST_URLS.loginURL, body);
  }

  getFoods(){
    return this.apiCacheRequest(REST_URLS.getFoods);
  }

  getFoodsDetails(slug: any, cache: boolean) {
    if (cache) {
      return this.apiCacheRequest(
        REST_URLS.getFoodsDetails.replace("{slug}", slug)
      );
    }
    return this.http.get(REST_URLS.getFoodsDetails.replace("{slug}", slug))
  }
  removeComment(id) {
    return this.http.delete(REST_URLS.comments + "/" + id);
  }

  getRestaurantByFilter(query) {
    return this.apiCacheRequest(REST_URLS.getFoods+'&' +query);
  }

}
