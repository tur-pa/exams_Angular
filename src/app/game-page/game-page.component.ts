import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { movemenetHistory } from '../movemenet-history.module';
import { NgxSnakeComponent } from 'ngx-snake';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  @Output() enabledEvent = new EventEmitter<boolean>();
  @Output() sendUserPointsEvent = new EventEmitter<User[]>();
  @Input() user: User[] = [];
  @Input() usersReults: User[] = [];

  @ViewChild(NgxSnakeComponent)
  public Game!: NgxSnakeComponent;

  constructor() {}

  ngOnInit(): void {}

  time: number = 0;
  timeRunning: boolean = false;
  displayTime: string = '0';
  enabled: boolean = true;
  points: number = 0;
  interval: any;
  movementHistory: movemenetHistory[] = [];
  dirSortScore: string = ``;
  dirSortTime: string = ``;
  moveType: string = `ALL`;

  changeSortDirectionScore(event: any): void {
    this.dirSortScore = event.target.name;
  }

  getTime(): void {
    this.timeRunning = !this.timeRunning; //HANDLE STOP/START EVENT
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
    console.log(this.movementHistory);
  }

  handleClickHistoryFromHotkey(event: string): void {
    this.movementHistory.push({
      movement: event,
      time: this.transformTime(this.time),
    });
  }

  showResult(): void {
    this.points++;
  }

  endGame(): void {
    clearInterval(this.interval); // STOP TIMER
    this.user[0].userPoints = this.points; // SET POINTS FOR CURR USER
    this.sendUserPointsEvent.emit(this.user); // SEND USER DO PARENT
    alert(`Game over!`);
  }

  resetGame(): void {
    this.user = this.user.map((newArray) => ({ ...newArray })); // CREATE NEW ARRAY DUE TO IT CONNECT POINTS TO ONE PERSON
    this.points = 0; // RESET POINTS
    this.time = 0; // RESET POINTS
    this.movementHistory.length = 0; // RESET MOVEMENT HISTORY
  }

  backToIntroPage(): void {
    this.enabledEvent.emit(this.enabled);
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
