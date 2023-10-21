import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SecondComponent } from './components/second/second.component';
import { AuthGuard } from './services/auth.guard';
import { Role } from 'src/shared/helpers';
import { AdminComponent } from './components/admin/admin.component';
import { NotAccessComponent } from './component/not-access/not-access.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate : [AuthGuard],
    data: { roles: [Role.User, Role.Admin]}
  },
  {
    path: 'not',
    component: NotAccessComponent,
    canActivate : [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate : [AuthGuard],
    data: { roles: [Role.Admin]}
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
