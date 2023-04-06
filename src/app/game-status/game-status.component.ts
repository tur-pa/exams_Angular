import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { ThemePalette } from '@angular/material/core';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
})
export class GameStatusComponent implements OnInit {
  @Input() points: number = 0;
  @Input() displayTime: string = '';
  @Input() currUser: User = {
    userName: '',
    userToken: '',
    userPoints: 0,
  };

  toggleCompColor: ThemePalette = 'primary';
  toggleCompChecker: boolean = false;
  templateColor: boolean = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userInfo: UserInfoService
  ) {
    this._route.params.subscribe((params) => {
      if (params['selectedColor'] === 'contrast-on') {
        this.templateColor = true;
      } else {
        this.templateColor = false;
      }
    });
  }

  ngOnInit(): void {
    this.toggleCompChecker = this.templateColor;
  }

  changeColor(templateColor: boolean): void {
    this.templateColor = !templateColor;

    if (this.templateColor === true) {
      this._router.navigate(['/game', 'contrast-on']); // NAVIGATOR
    } else {
      this._router.navigate(['/game', 'contrast-off']); // NAVIGATOR
    }
  }

  backToIntroPage(): void {
    this._userInfo.allUsers.length = 0; // CLEAR USERS DATA
    this._router.navigate(['/intro']); // NAVIGATOR
  }
}
