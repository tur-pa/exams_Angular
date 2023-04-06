import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';
import { GameControlService } from '../services/game-control.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  constructor(
    private _router: Router,
    private _userInfo: UserInfoService,
    private _gameControl: GameControlService, // ROUTE GUARD OLD VERSION
    private _dataService: DataService
  ) {}

  templateColor: boolean = false;

  templateColorToParent(templateColor: boolean): void {
    this.templateColor = templateColor;
  }

  newUserToParent(newUser: User) {
    console.log(this._userInfo.allUsers);
    this._dataService
      .authentication(newUser.userToken)
      .subscribe((dataFromServer) => {
        this._userInfo.getTokenValidFromInput(dataFromServer.success);
        if (dataFromServer.success) {
          this._userInfo.createPlayer(newUser); // SEND USER TO SERVICE
        }
        // this._gameControl.validationStatus(dataFromServer.success); // SEND INFORMATION ABOUT VALIDATION TO SERVICE OLD VERSION
        // if (dataFromServer.success) { // ROUTE GUARD OLD VERSION
        if (this.templateColor === true) {
          this._router.navigate(['/game', 'contrast-on']); // NAVIGATOR
        } else {
          this._router.navigate(['/game', 'contrast-off']); // NAVIGATOR
        }
        // } else {
        //   this._router.navigate(['/intro']); // ROUTE GUARD OLD VERSION
        // }
      });
  }

  ngOnInit(): void {}
}
