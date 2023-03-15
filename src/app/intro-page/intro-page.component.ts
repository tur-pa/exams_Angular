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
    private _gameControl: GameControlService,
    private _dataService: DataService
  ) {}

  newUserToParent(newUser: User) {
    this._userInfo.createPlayer(newUser); // SEND USER TO SERVICE

    this._dataService
      .authentication(newUser.userToken)
      .subscribe((dataFromServer) => {
        this._gameControl.validationStatus(dataFromServer.success); // SEND INFORMATION ABOUT VALIDATION TO SERVICE
        if (dataFromServer.success) {
          this._router.navigate(['/game']); // NAVIGATOR
        } else {
          this._router.navigate(['/intro']); // NAVIGATOR
        }
      });
  }

  ngOnInit(): void {}
}
