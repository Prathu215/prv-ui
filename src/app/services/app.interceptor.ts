import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
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

    return next.handle(req).pipe(finalize(( )=>{
      this.httpAppService.showSpinner.next(false);
    }));
  }
}
