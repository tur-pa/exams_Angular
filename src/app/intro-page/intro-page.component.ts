import { Component, OnInit } from '@angular/core';
import { User } from '../modules/user.model';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';
import { GameControlService } from '../services/game-control.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  constructor(
    private _router: Router,
    private _userInfo: UserInfoService,
    private _gameControl: GameControlService
  ) {}

  user: User = {
    userName: '',
    userMail: '',
    userPoints: 0,
  };

  newUserToParent(newUser: User) {
    this._userInfo.createPlayer(newUser); // SEND USER TO SERVICE
    this._gameControl.validPassKey(); // ROUTE GUARD
    this._router.navigate(['/game']); // NAVIGATOR
  }

  ngOnInit(): void {}
}
