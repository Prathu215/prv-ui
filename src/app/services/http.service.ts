import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpAppService {
  url = "/api/contacts";
  constructor(public http: HttpClient) {}
  contactMe(body) {
    return this.http.post(this.url, body);
  }
}
