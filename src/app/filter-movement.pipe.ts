import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { movemenetHistory } from './movemenet-history.module';

@Pipe({
  name: 'filterMovement',
})
export class FilterMovementPipe implements PipeTransform {
  transform(
    movement: movemenetHistory[],
    moveType: string
  ): movemenetHistory[] {
    if (moveType === ``) {
      return movement;
    } else if (moveType === `ALL`) {
      return movement;
    } else {
      return _.filter(movement, { movement: moveType });
    }
  }
}
