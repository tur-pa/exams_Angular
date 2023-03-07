import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { movemenetHistory } from '../movemenet-history.module';
import { NgxSnakeComponent } from 'ngx-snake';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';
import { GameControlService } from '../game-control.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  @ViewChild(NgxSnakeComponent)
  public Game!: NgxSnakeComponent;

  constructor(
    private _router: Router,
    private _userInfo: UserInfoService,
    private _gameControl: GameControlService
  ) {}

  ngOnInit(): void {
    this._gameControl.redirectionChecker(); // ROUTE GUARD
  }

  time: number = 0;
  timeRunning: boolean = false;
  displayTime: string = '0';
  interval: any;

  allUsers: User[] = this._userInfo.getUsersData();
  currUser: User = {
    userName: '',
    userMail: '',
    userPoints: 0,
  };

  points: number = 0;
  movementHistory: movemenetHistory[] = [];

  dirSortScore: string = ``;
  dirSortTime: string = ``;
  moveType: string = `ALL`;

  changeSortDirectionScore(event: any): void {
    this.dirSortScore = event.target.name;
  }

  getTime(): void {
    this.timeRunning = !this.timeRunning; // HANDLE STOP/START EVENT
    if (this.timeRunning) {
      this.interval = setInterval(() => {
        this.time++;
        this.displayTime = this.transformTime(this.time);
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  }

  transformTime(value: number): string {
    const minutes: number = Math.floor(value / 60);
    if (minutes <= 9) {
      return '0' + minutes + ':' + (value - minutes * 60);
    } else {
      return minutes + ':' + (value - minutes * 60);
    }
  }

  handleClickHistory(event: any): void {
    this.movementHistory.push({
      movement: event.target.innerText,
      time: this.transformTime(this.time),
    });
  }

  handleClickHistoryFromHotkey(event: string): void {
    this.movementHistory.push({
      movement: event,
      time: this.transformTime(this.time),
    });
  }

  calculatePoints(): void {
    this.points++;
  }

  getCurrUser(): void {
    this.currUser = this.allUsers[this.allUsers.length - 1];
  }

  createCopyUser(): void {
    this.allUsers.push({
      userName: this.currUser.userName,
      userMail: this.currUser.userMail,
      userPoints: 0,
    });
  }

  endGame(): void {
    clearInterval(this.interval); // STOP TIMER
    this.currUser.userPoints = this.points; // SET POINTS FOR CURR USER
    alert(`Game over!`);
  }

  resetGame(): void {
    this.points = 0; // RESET POINTS
    this.time = 0; // RESET TIMER
    this.movementHistory.length = 0; // RESET MOVEMENT HISTORY
    this.createCopyUser(); // FOR ANOTHER GAME BY SAME PLAYER
  }

  backToIntroPage(): void {
    this._router.navigate(['/intro']); // NAVIGATOR
  }

  // HOTKEYS //

  @HostListener(`keydown.ArrowUp`, [`$event`])
  onUpPress(event: KeyboardEvent) {
    this.Game.actionUp();
    this.handleClickHistoryFromHotkey(`UP`);
  }

  @HostListener(`keydown.ArrowDown`, [`$event`])
  onDownPress(event: KeyboardEvent) {
    this.Game.actionDown();
    this.handleClickHistoryFromHotkey(`DOWN`);
  }

  @HostListener(`keydown.ArrowLeft`, [`$event`])
  onLeftPress(event: KeyboardEvent) {
    this.Game.actionLeft();
    this.handleClickHistoryFromHotkey(`LEFT`);
  }

  @HostListener(`keydown.ArrowRight`, [`$event`])
  onRightPress(event: KeyboardEvent) {
    this.Game.actionRight();
    this.handleClickHistoryFromHotkey(`RIGHT`);
  }

  @HostListener(`keydown.Enter`, [`$event`])
  onEnterPress(event: KeyboardEvent) {
    this.Game.actionStart();
    this.handleClickHistoryFromHotkey(`START`);
  }

  @HostListener(`keydown.Esc`, [`$event`])
  onEscPress(event: KeyboardEvent) {
    this.backToIntroPage();
  }
}
