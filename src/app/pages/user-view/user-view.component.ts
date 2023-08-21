import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  detailedUser: User | any;
  router = inject(Router);

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async (params: any) => {
      let id: string = params.userid
      try {
        const response = await this.usersService.getById(id)
        if (response === undefined) {
          alert('El usuario no existe')
          this.router.navigate(['/home'])
        }
        else {
          this.detailedUser = response
        }
      }
      catch (error) {
        console.log(error)
      }
    })
  }

  async deletePost(id: string): Promise<void> {
    alert(`Está seguro que desea borrar a ${this.detailedUser?.first_name + ' ' + this.detailedUser?.last_name}?`)
    let response = await this.usersService.delete(id)
    if (response) {
      alert('El producto se ha borrado correctamente')
      this.router.navigate(['/home'])
    }
  }
}
