import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'snake-app';
  enabled: boolean = true;
  user: User[] = [];
  usersReults: User[] = [];

  getEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  getUser(user: User[]) {
    this.user = user;
  }

  savePoints(user: User[]) {
    this.usersReults.push(...user);
  }
}
