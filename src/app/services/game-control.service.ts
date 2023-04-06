import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  constructor(private _router: Router) {}

  passKey: boolean = false;

  validationStatus(passKey: boolean) {
    this.passKey = passKey;
  }

  validationChecker() {
    if (!this.passKey) {
      this._router.navigate(['/intro']);
    }
  }
}

// OLD GUARD NOT USE
