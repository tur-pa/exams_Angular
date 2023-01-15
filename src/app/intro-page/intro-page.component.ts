import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

interface UserProp {
  userName: string;
  userMail: string;
}

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  @Output() enabledEvent = new EventEmitter<boolean>();
  @Output() userNameEvent = new EventEmitter<string>();
  constructor() {}

  users: UserProp[] = [];
  userName: string = ``;
  userMail: string = ``;
  enabled: boolean = true;
  btnState: boolean = false;
  mailState: boolean = false;

  public addPlayer(): void {
    this.users.push({ userName: this.userName, userMail: this.userMail });
    this.userNameEvent.emit(this.userName);

    this.enabled = !this.enabled;
    this.enabledEvent.emit(this.enabled);
  }

  public onInput(): void {
    if (
      this.userName !== `` &&
      this.userMail !== `` &&
      this.mailState === true
    ) {
      this.btnState = true;
    } else {
      this.btnState = false;
    }

    if (this.userMail.includes(`@`) && this.userMail.includes(`.`)) {
      this.mailState = true;
    } else {
      this.mailState = false;
    }

    console.log(this.btnState);
  }

  ngOnInit(): void {
    console.log(this.userName);
    console.log(this.userMail);
  }
}
