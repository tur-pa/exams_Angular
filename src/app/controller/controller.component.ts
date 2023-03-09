import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
})
export class ControllerComponent implements OnInit {
  @Output() actionStart = new EventEmitter();
  @Output() actionStop = new EventEmitter();
  @Output() actionReset = new EventEmitter();
  @Output() actionUp = new EventEmitter();
  @Output() actionDown = new EventEmitter();
  @Output() actionLeft = new EventEmitter();
  @Output() actionRight = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  actionOnClick(event: any): void {
    if (event.target.name === 'start') {
      this.actionStart.emit();
    } else if (event.target.name === 'stop') {
      this.actionStop.emit();
    } else if (event.target.name === 'reset') {
      this.actionReset.emit();
    } else if (event.target.name === 'up') {
      this.actionUp.emit();
    } else if (event.target.name === 'down') {
      this.actionDown.emit();
    } else if (event.target.name === 'left') {
      this.actionLeft.emit();
    } else if (event.target.name === 'right') {
      this.actionRight.emit();
    }
  }
}
