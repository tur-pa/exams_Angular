import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { User } from './user.model';

@Pipe({
  name: 'sortBy',
})
export class SortPipe implements PipeTransform {
  transform(score: User[], dir: string): User[] {
    if (dir === ``) {
      return score;
    } else {
      return _.orderBy(score, [`userPoints`], ['asc', 'desc']);
    }
  }
}
