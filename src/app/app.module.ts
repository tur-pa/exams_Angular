import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { SortScoresPipe } from './pipes/sort-scores.pipe';
import { SortMovementPipe } from './pipes/sort-movement.pipe';
import { FilterMovementPipe } from './pipes/filter-movement.pipe';
import { RouterModule } from '@angular/router';
import { IntroPageInputCompComponent } from './intro-page-input-comp/intro-page-input-comp.component';
import { ControllerComponent } from './controller/controller.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { MovementHistoryComponent } from './movement-history/movement-history.component';
import { ScoreHistoryComponent } from './score-history[notUsedInApp]/score-history.component';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { SortByHighScoresPipe } from './pipes/sort-by-high-scores.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouteGuardGuard } from './route-guard.guard';

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
    HighScoresComponent,
    SortByHighScoresPipe,
    FilterByNamePipe,
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroPageComponent },
      {
        path: 'game/:selectedColor',
        component: GamePageComponent,
        canActivate: [RouteGuardGuard],
      },
      { path: '**', redirectTo: 'intro' },
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
