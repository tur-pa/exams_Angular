import { Component, OnInit, Input } from '@angular/core';
import { User } from '../modules/user.model';

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
    userMail: '',
    userPoints: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}
