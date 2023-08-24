import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() myUsers: User | any;
  usersService = inject(UsersService)
  router = inject(Router)


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
      }
    })
  }
}
