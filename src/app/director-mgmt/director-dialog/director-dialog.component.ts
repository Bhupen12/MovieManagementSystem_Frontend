import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html',
  styleUrls: ['./director-dialog.component.scss']
})
export class DirectorDialogComponent {

  genderList = ["male", "female", "other"];

  DirectorForm!: FormGroup;
  actionBtn: string = "Add";

  constructor(
    private formBuilder: FormBuilder, 
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DirectorDialogComponent>
    ) { }

  ngOnInit(): void {
    this.DirectorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      gender: '',
    });

    console.log(this.editData);
    
    if(this.editData) {
      this.DirectorForm.patchValue(this.editData);
      this.actionBtn = "Update";
    } 
    
  }

  addDirector() {
    if(!this.editData){
      if (this.DirectorForm.valid) {
        this.api.postDirector(this.DirectorForm.value).subscribe({
          next: (res) => {
            alert("director added successfully");
            this.DirectorForm.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            alert("Error while adding director");
          }
        });
      }
    }else{
      if (this.DirectorForm.valid) {
        this.api.putDirector(this.DirectorForm.value, this.editData.id).subscribe({
          next: (res) => {
            alert("Director updated successfully");
            this.DirectorForm.reset();
            this.dialogRef.close('update');
          },
          error: (err) => {
            alert("Error while updating director");
          }
        });
      }
    }
  }

}
