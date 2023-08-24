import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
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

  async deleteUser(id: string): Promise<void> {
    let response;
    Swal.fire({
      title: 'Está seguro?',
      text: "Eliminar este usuario es una acción irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borralo!',
      cancelButtonText: 'Cancelar'

    }).then(async result => {
      response = await this.usersService.delete(id)
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado!',
          'El usuario ha sido eliminado correctamente',
          'success'
        )
        this.router.navigate(['/home'])
      }
    })
  }
}
