import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'snake-app';
  public enabled: boolean = true;
  public userName: string = ``;

  getEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  getUserName(userName: string) {
    this.userName = userName;
  }
}
