import { Component, OnInit, Injectable, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  Roles: any = ['Admin', 'Author', 'Reader'];

  userForm!: FormGroup;
  isFormValid = false;


  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Email: new FormControl("",[Validators.required,
        Validators.email]),
      UserName: new FormControl("",[Validators.required,
        Validators.minLength(2), 
        Validators.pattern('^[a-zA-Z].*')]),
      Password: new FormControl("",[Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&].*')]),
    });
  }

  Register(){
    this.api.postUser(this.userForm.value).subscribe(res => {
      console.log(res);
      alert('User created successfully!');
      localStorage.setItem('token', res.token);
      console.log('token: ',res.token);
        
      this.router.navigateByUrl('/Login' , {replaceUrl: true});

    },
    err => {
      console.log(err);
      alert(err.error);
    }
    );
  }

  get UserName(): FormControl { return this.userForm.get('UserName') as FormControl; }
  get Password(): FormControl { return this.userForm.get('Password') as FormControl; }
  get Email(): FormControl { return this.userForm.get('Email') as FormControl; }

  checkFormValidity() {
    if (this.userForm.valid) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }
  
}
