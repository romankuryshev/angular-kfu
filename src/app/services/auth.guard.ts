import { Injectable } from "@angular/core";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn} from '@angular/router'

import { AuthenticationService } from './authentication.service'

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: AuthenticationService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.userValue;
        if (user) {
            const {roles} = route.data;
            if(roles && !roles.includes(user.role)) {
                this.router.navigate(['/not'])
                return false;
            }
            return true;
        }
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}})
        return false;
    }
}