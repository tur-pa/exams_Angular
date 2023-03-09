import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { SortScoresPipe } from './pipes/sortScores.pipe';
import { SortMovementPipe } from './pipes/sort-movement.pipe';
import { FilterMovementPipe } from './pipes/filter-movement.pipe';
import { RouterModule } from '@angular/router';
import { IntroPageInputCompComponent } from './intro-page-input-comp/intro-page-input-comp.component';
import { ControllerComponent } from './controller/controller.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { MovementHistoryComponent } from './movement-history/movement-history.component';
import { ScoreHistoryComponent } from './score-history/score-history.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    SortScoresPipe,
    SortMovementPipe,
    FilterMovementPipe,
    IntroPageInputCompComponent,
    ControllerComponent,
    GameStatusComponent,
    MovementHistoryComponent,
    ScoreHistoryComponent,
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroPageComponent },
      {
        path: 'game',
        component: GamePageComponent,
      },
      { path: '**', redirectTo: 'intro' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
