import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scores } from '../models/scores.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  token: string = ``;

  httpOptions = {
    headers: new HttpHeaders({
      'auth-token': '1234',
      Accept: 'application/json',
    }),
  };

  public getScores(): Observable<Scores[]> {
    return this._http.get<Scores[]>(
      `http://localhost:8080/scores/snake`,
      this.httpOptions
    );
  }

  public authentication(token: string): Observable<{ success: boolean }> {
    this.httpOptions.headers = this.httpOptions.headers.set(
      'auth-token',
      token
    );
    return this._http.post<{ success: boolean }>(
      `http://localhost:8080/check-token`,
      { 'auth-token': token },
      this.httpOptions
    );
  }

  public sendScoreToServer(
    name: string,
    game: string,
    score: number
  ): Observable<Scores[]> {
    return this._http.post<Scores[]>(
      `http://localhost:8080/scores`,
      { name: name, game: game, score: score },
      this.httpOptions
    );
  }
}
