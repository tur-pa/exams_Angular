import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from '../models/scores.model';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(
    dataFromServer: Scores[],
    filterName: string,
    onlyMyScores: boolean
  ): any {
    if (onlyMyScores) {
      return dataFromServer.filter(
        (nameFromServer) => nameFromServer.name === filterName
      );
    } else {
      return dataFromServer;
    }
  }
}
