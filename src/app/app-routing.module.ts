import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormNewUserComponent } from './pages/form-new-user/form-new-user.component';
import { Error404Component } from './pages/error404/error404.component';
import { UserViewComponent } from './pages/user-view/user-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newuser', component: FormNewUserComponent },
  { path: 'home/user/:userid', component: UserViewComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
