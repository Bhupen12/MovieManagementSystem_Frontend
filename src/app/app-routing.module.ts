import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorMgmtComponent } from './actor-mgmt/actor-mgmt.component';
import { MovieMgmtComponent } from './movie-mgmt/movie-mgmt.component';
import { DirectorMgmtComponent } from './director-mgmt/director-mgmt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Login', 
    pathMatch: 'full',
  },
  {
    path: 'movie-mgmt',
    component: MovieMgmtComponent,
  },
  {
    path: 'actor-mgmt',
    component: ActorMgmtComponent,
  },
  {
    path: 'director-mgmt',
    component: DirectorMgmtComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
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
