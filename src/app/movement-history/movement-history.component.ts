import { Component, OnInit, Input } from '@angular/core';
import { movemenetHistory } from '../models/movemenet-history.model';

@Component({
  selector: 'app-movement-history',
  templateUrl: './movement-history.component.html',
  styleUrls: ['./movement-history.component.scss'],
})
export class MovementHistoryComponent implements OnInit {
  @Input() movementHistory: movemenetHistory[] = [];
  constructor() {}

  ngOnInit(): void {}

  dirSortTime: string = ``;
  moveType: string = `ALL`;
}
