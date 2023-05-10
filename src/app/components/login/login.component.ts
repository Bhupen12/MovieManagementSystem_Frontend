import { Component, OnInit, Injectable, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      UserName: new FormControl("",[Validators.required]),
      Password: new FormControl("",[Validators.required])
    });
  }


  login(){
    this.api.postLogin(this.loginForm.value).subscribe(res => {
      if(res){
        localStorage.setItem('token', res.token);
        console.log('token: ',res.token);
        
        this.router.navigateByUrl('/navbar' , {replaceUrl: true});
      }
    },
    err => {
      console.log(err);
      alert(err.error);
    }
    );
  }

  get UserName(): FormControl { return this.loginForm.get('UserName') as FormControl; }
  get Password(): FormControl { return this.loginForm.get('Password') as FormControl; }
}
