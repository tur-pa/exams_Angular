import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  @Output() enabledEvent = new EventEmitter<boolean>();
  @Input() public userName: string = ``;
  constructor() {}

  ngOnInit(): void {}

  time: number = 0;
  displayTime: any;
  enabled: boolean = true;
  points: number = 0;
  interval: any;

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

  showResult(): void {
    this.points++;
  }

  endGame(): void {
    clearInterval(this.interval);

    alert(`Game over!`);
  }

  backToIntroPage(): void {
    this.enabled = !this.enabled;
    this.enabledEvent.emit(this.enabled);
  }
}
