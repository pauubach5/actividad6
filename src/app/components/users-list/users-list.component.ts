import { Component, inject } from '@angular/core';
import { Api } from 'src/app/interfaces/api.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  pagination: number = 2
  usersPerPage: number = 8
  users: User[] = []
  usersService = inject(UsersService);
  getAll: any = this.usersService.getAll()

  async ngOnInit(): Promise<void> {
    try {
      console.log(this.getAll)
      this.users = (await this.getAll).results
      this.pagination = (await this.getAll).page
      this.usersPerPage = (await this.getAll).per_page
      console.log(this.pagination, this.usersPerPage)
    }
    catch (error) {
      console.log(error)
    }
  }
}
