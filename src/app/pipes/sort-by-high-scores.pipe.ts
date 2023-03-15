import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { Scores } from '../models/scores.model';

@Pipe({
  name: 'sortByHighScores',
})
export class SortByHighScoresPipe implements PipeTransform {
  transform(score: Scores[], dirSortScore: string): Scores[] {
    if (dirSortScore === ``) {
      return score;
    } else {
      if (dirSortScore === `asc`) {
        return _.orderBy(score, [`score`], ['asc']);
      } else {
        return _.orderBy(score, [`score`], ['desc']);
      }
    }
  }
}
