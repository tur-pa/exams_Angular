import { Component, Input, OnInit } from '@angular/core';
import { switchMap, timer } from 'rxjs';
import { Scores } from '../models/scores.model';
import { DataService } from '../services/data.service';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.scss'],
})
export class HighScoresComponent implements OnInit {
  @Input() newScore: Scores[] = [];

  dirSortScore: string = ``;
  dataFromServer: Scores[] = [];
  getDataByTime: any;
  onlyMyScores: boolean = false;
  filterName: string = '';

  constructor(
    private _dataService: DataService,
    private _userNameData: UserInfoService
  ) {}
  ngOnInit(): void {
    this.getDataByTime = timer(0, 30000)
      .pipe(switchMap(() => this._dataService.getScores()))
      .subscribe((dataFromServer) => {
        this.dataFromServer = dataFromServer;
        console.log(this.dataFromServer); // CHECKING RESPONSE
      });
    this.filterName = this._userNameData.getUserName(); // GET NAME FROM SERVICE TO FILTER
  }

  ngOnChanges(): void {
    this.dataFromServer = this.newScore; // UPDATE NEW SCORE
  }

  changeSortDirectionScore(event: any): void {
    this.dirSortScore = event.target.name;
  }

  ngOnDestroy() {
    this.getDataByTime.unsubscribe();
  }
}
