import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { USERS } from '../db/users.db';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private arrUsers: User[] = USERS.results

  getAllUsers() {
    return this.arrUsers
  }
  addUser(newUser: any) {
    return this.arrUsers.push(newUser)
  }
}
