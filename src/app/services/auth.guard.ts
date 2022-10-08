

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 
 
@Injectable({
    providedIn: "root",
  })
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition  
        const isUserSessionLogin = JSON.parse(sessionStorage.getItem('isUserLogin'));
        if(isUserSessionLogin?.jwt){
            return true;

        } 
        else{
            this.router.navigate(["login"]);
            return false;
        }
        
    }
 
}