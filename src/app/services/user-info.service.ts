import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}
  allUsers: User[] = [];
  idUser: number = -1;
  userName: string = '';
  tokenValidation: boolean = false;

  createPlayer(user: User) {
    this.idUser++;
    this.allUsers.push(user);
    this.userName = user.userName;
  }

  updatePlayers(users: User[]) {
    this.allUsers.concat(users);
  }

  getUserName() {
    return this.userName;
  }

  getUsersData() {
    return this.allUsers;
  }

  getTokenValidFromInput(valid: boolean) {
    this.tokenValidation = valid;
  }

  sendTokenValidToGuard() {
    return this.tokenValidation;
  }
}
