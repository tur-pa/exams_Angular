import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}
  allUsers: User[] = [];
  idUser: number = -1;

  createPlayer(user: User) {
    this.idUser++;
    this.allUsers.push(user);
  }

  updatePlayers(users: User[]) {
    this.allUsers.concat(users);
  }

  getUsersData() {
    return this.allUsers;
  }
}
