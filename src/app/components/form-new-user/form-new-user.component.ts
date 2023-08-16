import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.css']
})
export class FormNewUserComponent {
  newUserForm: FormGroup;
  usersService: any = inject(UsersService)
  constructor() {
    this.newUserForm = new FormGroup({
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      username: new FormControl('', []),
      email: new FormControl('', []),
      image: new FormControl('', []),
    }, []);
  }
  submitNewUser() {
    let newUserForm = this.newUserForm.value
    this.usersService.addUser(newUserForm)

  }
}
