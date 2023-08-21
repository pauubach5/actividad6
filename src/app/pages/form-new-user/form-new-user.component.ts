import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor() {
    this.newUserForm = new FormGroup({
      //Poner un id que se genere de forma random
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
  submitNewUser() {
    let response = this.usersService.addUser(this.newUserForm.value)
    if (response === 'ok') {
      this.router.navigate(['/'])
    }
    else {
      console.error('El usuario no se ha podido registrar')
    }
    this.newUserForm.reset()
  }
  checkInput(formControlName: string, validator: string): boolean | undefined {
    return this.newUserForm.get(formControlName)?.hasError(validator) && this.newUserForm.get(formControlName)?.touched
  }

  editForm() {
    let obj = {
      first_name: 'Miau',
      last_name: 'j',
      email: 'oa',
      image: 'jaosd',
    }
    this.newUserForm.setValue(obj)
  }
}
