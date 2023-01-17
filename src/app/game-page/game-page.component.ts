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

  @Input() Game!: NgxSnakeComponent;

  constructor() {}

  ngOnInit(): void {}

  time: number = 0;
  displayTime: string = '';
  enabled: boolean = true;
  points: number = 0;
  interval: any;
  gameHistory: movemenetHistory[] = [];

  getTime(): void {
    this.time = 0;
    this.interval = setInterval(() => {
      this.time++;
      this.displayTime = this.transform(this.time);
    }, 1000);
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    if (minutes <= 9) {
      return '0' + minutes + ':' + (value - minutes * 60);
    } else {
      return minutes + ':' + (value - minutes * 60);
    }
  }

  handleClick(event: any): void {
    this.gameHistory.push({
      movement: event.target.innerText,
      time: this.transform(this.time),
    });
    console.log(this.gameHistory);
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
    console.log(`Game over!`);
  }

  backToIntroPage(): void {
    this.enabled = !this.enabled;
    this.enabledEvent.emit(this.enabled);
  }

  @HostListener(`keydown.ArrowUp`, [`$event`])
  onArrowUpPress(event: KeyboardEvent) {
    this.Game.actionStart;
  }
}

// @HostListener(`keydown.ArrowUp`, [`$event`])
// onArrowUpPress(event: KeyboardEvent) {
//   this.Game!.actionUp();
//   return false;
// }
