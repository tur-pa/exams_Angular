import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from './services/user-info.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardGuard implements CanActivate {
  constructor(
    private _tokenValidation: UserInfoService,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._tokenValidation.sendTokenValidToGuard()) {
      return true;
    } else {
      return this._router.parseUrl('/intro');
    }
  }
}
