import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { SortScoresPipe } from './sortScores.pipe';
import { SortMovementPipe } from './sort-movement.pipe';
import { FilterMovementPipe } from './filter-movement.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    SortScoresPipe,
    SortMovementPipe,
    FilterMovementPipe,
  ],
  imports: [BrowserModule, NgxSnakeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
