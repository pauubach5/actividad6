import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.css']
})
export class FormNewUserComponent {
  newUserForm: FormGroup;
  usersService: any = inject(UsersService)
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.newUserForm = new FormGroup({
      _id: new FormControl('', []),
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/)
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/)]),
    }, []);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: string = params.userid

      if (id !== undefined) {
        let response = await this.usersService.getById(id)

        let obj = {
          _id: response._id,
          first_name: response.first_name,
          last_name: response.last_name,
          email: response.email,
          image: response.image
        }
        this.newUserForm.setValue(obj)
      }
    })

  }

  async addUser() {
    let newUserValue = this.newUserForm.value
    if (newUserValue._id) {
      //Update
      let response = await this.usersService.update(newUserValue)
      if (response._id) {
        alert('Usuario actualizado correctamente')
        //He puesto el navigate hacia la vista Detalle, en lugar del Home, porque me parece mas intuitivo para el usuario.
        this.router.navigate([`/user/${response._id}`])
      }
      else {
        alert('Error al actualizar el usuario')
      }
    }
    else {
      //Insert
      let response = await this.usersService.add(newUserValue)
      if (response._id) {
        alert('Usuario insertado correctamente')
        this.router.navigate(['/home'])
      }
      else {
        alert('Ha habido un error al insertar el usuario, intentalo otra vez')
      }
    }

  }

  checkInput(formControlName: string, validator: string): boolean | undefined {
    return this.newUserForm.get(formControlName)?.hasError(validator) && this.newUserForm.get(formControlName)?.touched
  }

}
