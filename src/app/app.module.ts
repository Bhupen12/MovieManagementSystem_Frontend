import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieMgmtComponent } from './movie-mgmt/movie-mgmt.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './movie-mgmt/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ActorMgmtComponent } from './actor-mgmt/actor-mgmt.component';
import { ActorDialogComponent } from './actor-mgmt/actor-dialog/actor-dialog.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import { ConformBtnComponent } from './movie-mgmt/conform-btn/conform-btn.component';
import { ActorConformBtnComponent } from './actor-mgmt/actor-conform-btn/actor-conform-btn.component';
import { DirectorMgmtComponent } from './director-mgmt/director-mgmt.component';
import { DirectorDialogComponent } from './director-mgmt/director-dialog/director-dialog.component';
import { DirectorConformBtnComponent } from './director-mgmt/director-conform-btn/director-conform-btn.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieMgmtComponent,
    DialogComponent,
    ActorMgmtComponent,
    ActorDialogComponent,
    ConformBtnComponent,
    ActorConformBtnComponent,
    DirectorMgmtComponent,
    DirectorDialogComponent,
    DirectorConformBtnComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
