import { Component, OnInit, Input } from '@angular/core';
import { User } from '../modules/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-history',
  templateUrl: './score-history.component.html',
  styleUrls: ['./score-history.component.scss'],
})
export class ScoreHistoryComponent implements OnInit {
  @Input() currUser: User = {
    userName: '',
    userMail: '',
    userPoints: 0,
  };
  @Input() allUsers: User[] = [];

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  dirSortScore: string = ``;

  changeSortDirectionScore(event: any): void {
    this.dirSortScore = event.target.name;
  }

  backToIntroPage(): void {
    this._router.navigate(['/intro']); // NAVIGATOR
  }
}
