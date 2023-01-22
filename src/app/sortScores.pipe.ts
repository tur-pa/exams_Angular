import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { User } from './user.model';

@Pipe({
  name: 'sortByScores',
})
export class SortScoresPipe implements PipeTransform {
  transform(score: User[], dirSortScore: string): User[] {
    if (dirSortScore === ``) {
      return score;
    } else {
      if (dirSortScore === `asc`) {
        return _.orderBy(score, [`userPoints`], ['asc']);
      } else {
        return _.orderBy(score, [`userPoints`], ['desc']);
      }
    }
  }
}
