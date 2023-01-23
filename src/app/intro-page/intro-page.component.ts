import { Component, OnInit, HostListener } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  @Output() enabledEvent = new EventEmitter<boolean>();
  @Output() userEvent = new EventEmitter<User[]>();
  constructor() {}

  user: User[] = [];
  userName: string = ``;
  userMail: string = ``;
  enabled: boolean = true;
  btnState: boolean = false;
  mailState: boolean = false;

  addPlayer(form: FormGroup): void {
    this.user.push({
      userName: form.value.userName,
      userMail: form.value.userMail,
      userPoints: 0,
    });
    this.userEvent.emit(this.user); //SEND USER TO PARENT

    this.enabled = !this.enabled;
    console.log(this.enabled);
    this.enabledEvent.emit(this.enabled);
  }

  ngOnInit(): void {}
}
