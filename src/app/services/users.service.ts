import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Api } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private id!: string
  httpClient = inject(HttpClient)
  private baseUrl: string = "https://peticiones.online/api/users/"

  getAll(): Promise<Api> {
    return lastValueFrom(this.httpClient.get<Api>(this.baseUrl))
  }

  getById(id: string): Promise<User> {
    return lastValueFrom(this.httpClient.get<User>(`${this.baseUrl}${id}`))
  }

  delete(id: string): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${id}`))
  }

  add(formValue: User): Promise<User> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, formValue))
  }

  update(formValue: User): Promise<User> {
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}${formValue._id}`, formValue))
  }


  // addUser(user: User): any {
  //   let newUser = user

  //   if (this.arrUsers.findIndex(user => user.email === newUser.email && user.username === newUser.username) === -1) {
  //     user._id = this.id
  //     this.arrUsers.push(newUser)
  //     return 'ok'
  //   }
  //   else {
  //     alert('Usuario Duplicado')
  //   }
  // }
}
