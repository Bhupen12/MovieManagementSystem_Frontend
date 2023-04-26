import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-actor-dialog',
  templateUrl: './actor-dialog.component.html',
  styleUrls: ['./actor-dialog.component.scss']
})
export class ActorDialogComponent {

  genderList = ["male", "female", "other"];

  ActorForm!: FormGroup;
  actionBtn: string = "Add";

  constructor(
    private formBuilder: FormBuilder, 
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ActorDialogComponent>
    ) { }

  ngOnInit(): void {
    this.ActorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      gender: '',
    });

    console.log(this.editData);
    
    if(this.editData) {
      this.ActorForm.patchValue(this.editData);
      this.actionBtn = "Update";
    } 
    
  }

  addActor() {
    if(!this.editData){
      if (this.ActorForm.valid) {
        this.api.postActor(this.ActorForm.value).subscribe({
          next: (res) => {
            alert("Actor added successfully");
            this.ActorForm.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            alert("Error while adding actor");
          }
        });
      }
    }else{
      if (this.ActorForm.valid) {
        this.api.putActor(this.ActorForm.value, this.editData.id).subscribe({
          next: (res) => {
            alert("Actor updated successfully");
            this.ActorForm.reset();
            this.dialogRef.close('update');
          },
          error: (err) => {
            alert("Error while updating actor");
          }
        });
      }
    }
  }

}
