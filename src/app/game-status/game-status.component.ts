import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

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
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  backToIntroPage(): void {
    this._router.navigate(['/intro']); // NAVIGATOR
  }
}
