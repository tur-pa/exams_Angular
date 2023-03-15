import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../models/user.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro-page-input-comp',
  templateUrl: './intro-page-input-comp.component.html',
  styleUrls: ['./intro-page-input-comp.component.scss'],
})
export class IntroPageInputCompComponent implements OnInit {
  @Output() newUser = new EventEmitter<User>();
  constructor() {}

  user: User = {
    userName: '',
    userToken: '',
    userPoints: 0,
  };

  ngOnInit(): void {}

  addPlayer(form: FormGroup): void {
    this.user = {
      userName: form.value.userName,
      userToken: form.value.userToken,
      userPoints: 0,
    };
    this.newUser.emit(this.user);
  }
}
