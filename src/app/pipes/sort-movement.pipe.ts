import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { movemenetHistory } from '../models/movemenet-history.model';

@Pipe({
  name: 'sortByMovement',
})
export class SortMovementPipe implements PipeTransform {
  transform(time: movemenetHistory[], dirSortTime: string): movemenetHistory[] {
    if (dirSortTime === ``) {
      return time;
    } else {
      if (dirSortTime === `asc`) {
        return _.orderBy(time, [`time`], ['asc']);
      } else {
        return _.orderBy(time, [`time`], ['desc']);
      }
    }
  }
}
