import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  activateRoute = inject(ActivatedRoute)
  usersService = inject(UsersService)
  detailedUser: User | any
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      let id: number = Number(params.userid)
      this.detailedUser = this.usersService.getById(id)
      console.log(this.detailedUser)
      //Con este id vamos a llamar al servicio getById(id) y que devuelva solo el objeto con ese id
    })
  }
}
