import { Injectable, Optional } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouteReuseStrategy } from '@angular/router';
import { AuthService, CustomRouterReuseStrategy, AppRouter } from '@allianzSND/core';
import { AuthError } from '@allianzSND/core';

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate, CanActivateChild {

  constructor(private router: AppRouter,
    private authService: AuthService,
    @Optional() private routeReuseStrategy: RouteReuseStrategy
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.authRoute({ url: state.url, ...next.data }).then((res) => {
      if (!res.status) {
        // If auth not passed
        if (res.error == AuthError.TIMEOUT || res.error == AuthError.NOT_LOGIN) {
          if (this.routeReuseStrategy && (<CustomRouterReuseStrategy>this.routeReuseStrategy).deleteRouteSnapshot) {
            (<CustomRouterReuseStrategy>this.routeReuseStrategy).deleteRouteSnapshot();
          }
          this.router.navigate("Login");
        }
      }
      return res.status;
    });
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('can ActivateChild.', next, state);
    return this.canActivate(next, state);
  }
}
