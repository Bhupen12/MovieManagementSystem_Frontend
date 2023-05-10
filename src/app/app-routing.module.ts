import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorMgmtComponent } from './actor-mgmt/actor-mgmt.component';
import { MovieMgmtComponent } from './movie-mgmt/movie-mgmt.component';
import { DirectorMgmtComponent } from './director-mgmt/director-mgmt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Login', 
    pathMatch: 'full',
  },
  {
    path: 'movie-mgmt',
    component: MovieMgmtComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actor-mgmt',
    component: ActorMgmtComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'director-mgmt',
    component: DirectorMgmtComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
