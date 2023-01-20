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
  @Output() pointsEvent = new EventEmitter<User[]>();
  @Input() user: User[] = [];
  @Input() pointsResult: User[] = [];

  @ViewChild(NgxSnakeComponent)
  public Game!: NgxSnakeComponent;

  constructor() {}

  ngOnInit(): void {}

  time: number = 0;
  timeRunning: boolean = false;
  displayTime: string = '';
  enabled: boolean = true;
  points: number = 0;
  interval: any;
  movementHistory: movemenetHistory[] = [];
  dir: string = ``;

  changeDirection(): void {
    this.dir = `desc`;
  }

  getTime(): void {
    this.timeRunning = !this.timeRunning;
    if (this.timeRunning) {
      this.interval = setInterval(() => {
        this.time++;
        this.displayTime = this.transform(this.time);
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  }

  transform(value: number): string {
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
      time: this.transform(this.time),
    });
    console.log(this.movementHistory);
  }

  showResult(): void {
    this.points++;
  }

  endGame(): void {
    clearInterval(this.interval); // STOP TIMER
    this.user[0].userPoints = this.points; // SET POINTS
    this.pointsEvent.emit(this.user); // SEND DO PARENT
    this.user = this.user.map((newArray) => ({ ...newArray })); // CREATE NEW ARRAY DUE TO IT CONNECT POINTS TO ONE PERSON
    this.points = 0; // RESET POINTS
    this.time = 0; // RESET POINTS
    this.movementHistory.length = 0; // RESET MOVEMENT HISTORY
    console.log(`Game over!`);
  }

  backToIntroPage(): void {
    this.enabled = !this.enabled;
    this.enabledEvent.emit(this.enabled);
  }

  // HOTKEYS //
  @HostListener(`keydown.ArrowUp`, [`$event`])
  onUpPress(event: KeyboardEvent) {
    this.Game.actionUp();
  }

  @HostListener(`keydown.ArrowDown`, [`$event`])
  onDownPress(event: KeyboardEvent) {
    this.Game.actionDown();
  }

  @HostListener(`keydown.ArrowLeft`, [`$event`])
  onLeftPress(event: KeyboardEvent) {
    this.Game.actionLeft();
  }

  @HostListener(`keydown.ArrowRight`, [`$event`])
  onRightPress(event: KeyboardEvent) {
    this.Game.actionRight();
  }

  @HostListener(`keydown.Enter`, [`$event`])
  onEnterPress(event: KeyboardEvent) {
    console.log(`est`);
    this.Game.actionStart();
  }

  @HostListener(`keydown.Esc`, [`$event`])
  onEscPress(event: KeyboardEvent) {
    this.backToIntroPage();
  }
}
