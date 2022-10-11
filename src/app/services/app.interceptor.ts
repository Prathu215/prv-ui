import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { HttpAppService } from "./http.service";
import { finalize } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppInterceptor implements HttpInterceptor {
  constructor(private httpAppService: HttpAppService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      url: environment.apiHost + req.url,
    });
this.httpAppService.showSpinner.next(true);
    console.log(req);
  

const tokenUrls =["/api/comments"];
const contains = tokenUrls.some(element => req.url.includes(element));
    if( contains && (req.method=="PUT" || req.method=="DELETE")){
      const getToken = JSON.parse(sessionStorage.getItem('isUserLogin'));
      req = req.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+getToken?.jwt 
        })
      });
    }
   
    return next.handle(req).pipe(finalize(( )=>{
      this.httpAppService.showSpinner.next(false);
    }));
  }
}


