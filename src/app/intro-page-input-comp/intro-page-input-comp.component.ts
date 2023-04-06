import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-intro-page-input-comp',
  templateUrl: './intro-page-input-comp.component.html',
  styleUrls: ['./intro-page-input-comp.component.scss'],
})
export class IntroPageInputCompComponent implements OnInit {
  @Output() newUser = new EventEmitter<User>();
  @Output() templateColor = new EventEmitter<boolean>();

  toggleCompColor: ThemePalette = 'primary';

  user: User = {
    userName: '',
    userToken: '',
    userPoints: 0,
  };

  constructor(private _fb: FormBuilder) {}

  public playerForm = this._fb.group({
    userName: [
      sessionStorage.getItem('userName'),
      [Validators.required, Validators.minLength(5)],
    ],
    userToken: ['', [Validators.required, Validators.minLength(4)]],
    templateColor: [false, [Validators.required]],
  });

  ngOnInit(): void {}

  addPlayer(playerForm: any): void {
    this.user = {
      userName: playerForm.value.userName,
      userToken: playerForm.value.userToken,
      userPoints: 0,
    };
    sessionStorage.setItem('userName', playerForm.value.userName); // *EXTRA TASK
    this.templateColor.emit(playerForm.value.templateColor);
    this.newUser.emit(this.user);
  }
}
