import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { USERS } from '../db/users.db';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private arrUsers: User[] = USERS.results
  private id: number = this.arrUsers.length + 1

  getAllUsers() {
    return this.arrUsers
  }

  addUser(user: User) {
    let newUser = user
    user.id = this.id
    this.arrUsers.push(newUser)
    this.id++
    console.log(newUser)
    return 'ok'
  }

  getById(id: number) {
    return this.arrUsers.find(user => user.id === id)
  }
}
