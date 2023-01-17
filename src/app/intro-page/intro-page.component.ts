import { Component, OnInit, HostListener } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
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

  addPlayer(): void {
    this.user.push({
      userName: this.userName,
      userMail: this.userMail,
      userPoints: 0,
    });
    this.userEvent.emit(this.user);

    this.enabled = !this.enabled;
    this.enabledEvent.emit(this.enabled);
  }

  onInput(): void {
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
  }

  @HostListener(`keydown.enter`, [`$event`])
  onEnterPress(event: KeyboardEvent) {
    this.addPlayer();
  }

  ngOnInit(): void {}
}
