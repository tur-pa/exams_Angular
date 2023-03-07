import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  constructor(private _router: Router) {}
  passKey: boolean = false;

  redirectionChecker() {
    if (this.passKey) {
      this._router.navigate(['/game']);
    } else {
      this._router.navigate(['/intro']);
    }
  }

  validPassKey() {
    this.passKey = true;
  }
}
