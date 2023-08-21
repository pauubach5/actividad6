import { Component, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users: User[] = []
  usersService = inject(UsersService);

  async ngOnInit(): Promise<void> {
    const getAll = this.usersService.getAll()
    try {
      this.users = (await getAll).results
    }
    catch (error) {
      console.log(error)
    }
  }
}
