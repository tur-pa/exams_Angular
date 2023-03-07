import { Component, OnInit, HostListener } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';
import { GameControlService } from '../game-control.service';

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

  addPlayer(form: FormGroup): void {
    this.user = {
      userName: form.value.userName,
      userMail: form.value.userMail,
      userPoints: 0,
    };
    this._userInfo.createPlayer(this.user); // SEND USER TO SERVICE
    this._gameControl.validPassKey(); // ROUTE GUARD
    this._router.navigate(['/game']); // NAVIGATOR
  }

  ngOnInit(): void {}
}
