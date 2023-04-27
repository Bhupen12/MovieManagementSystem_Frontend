import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorMgmtComponent } from './actor-mgmt/actor-mgmt.component';
import { MovieMgmtComponent } from './movie-mgmt/movie-mgmt.component';
import { DirectorMgmtComponent } from './director-mgmt/director-mgmt.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
