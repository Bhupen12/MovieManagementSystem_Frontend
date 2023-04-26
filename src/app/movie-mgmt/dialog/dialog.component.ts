import { Component, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  Genre = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Thriller',
    'Western',
  ];
  options = [
    'sam',
    'john',
    'james'
  ];
  optionsDirector = [
    'william',
    'zachary',
  ];
  filteredActor: any;
  filteredDirector: any;

  movieForm!: FormGroup;
  actionBtn: string = 'Save';
  isValidSelection: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogref: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      releaseYear: ['', [Validators.required]],
      directorID: ['', [Validators.required]],
      actorID: ['', [Validators.required]]
    }); 
    this.directorInitForm();
    this.getNamesDirector();
    this.initForm();
    this.getNames();
    console.log(this.editData);
    if (this.editData) {
      this.actionBtn = 'Update';
      this.movieForm.patchValue(this.editData);
    }
  }

  //lead actor name
  getNames() {
    this.api.getActors().subscribe((response) => {
      console.log(response);
      this.options = response;
      this.filteredActor = response;
    });
  }

  initForm() {
    this.movieForm
      .get('actorName')
      ?.valueChanges.pipe(debounceTime(1000))
      .subscribe((value) => {
        if (value && value.length) {
          this.filterData(value);
        } else {
          this.filteredActor = [];
        }
      });
  }

  filterData(enteredData: any) {
    if (enteredData) {
      this.filteredActor = this.options.filter((option: string) => {
        return option.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
      });
    }
  }

  //Director name
  getNamesDirector() {
    this.api.getDirectors().subscribe((response) => {
      console.log(response);
      this.optionsDirector = response;
      this.filteredDirector = response;
    });    
  }

  directorInitForm() {
    this.movieForm
      .get('directorName')
      ?.valueChanges.pipe(debounceTime(1000))
      .subscribe((value) => {
        if (value && value.length) {
          this.directorFilterData(value);
        } else {
          this.filteredDirector = [];
        }
      });
  }

  directorFilterData(enteredData: any) {
    if (enteredData) {
      this.filteredDirector = this.optionsDirector.filter((option: string) => {
        return option.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
      });
    }
  }

  //Add movie
  addMovie() {
    const actorId = this.movieForm.get('actorID')?.value?.id;
    const directorId = this.movieForm.get('directorID')?.value?.id;

    this.movieForm.get('actorID')?.setValue(actorId);
    this.movieForm.get('directorID')?.setValue(directorId);

    console.log(this.movieForm);
    if (!this.editData) {
      if (this.movieForm.valid) {  
          console.log(this.movieForm.value); 
          
          this.api.postMovie(this.movieForm.value).subscribe({
            next: (res) => {
              alert('Movie added successfully');
              this.movieForm.reset();
              this.dialogref.close('save');
            },
            error: (err) => {
              if (err.status === 400 && err.error === 'Invalid Actor ID.') {
                alert('Invalid Actor ID!!! Actor may not exist. Please first add the actor.');
              } else {
                alert('Error adding movie');
                console.log(err);
              }
            }
          });
        }
      }
    else {
      this.updateMovie();
    }
  }

  //Update movie
  updateMovie() {
    this.api.putMovie(this.movieForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Movie updated successfully');
        this.movieForm.reset();
        this.dialogref.close('update');
      },
      error: (err) => {
        alert('Error updating movie');
      },
    });
  }
}

// addMovie() {
//   if (!this.editData) {
//     if (this.movieForm.valid) {
//       this.api.postMovie(this.movieForm.value).subscribe({
//         next: (res) => {
//           alert('Movie added successfully');
//           this.movieForm.reset();
//           this.dialogref.close('save');
//         },
//         error: (err) => {
//           if (err.status === 400 && err.error === 'Invalid Actor ID.') {
//             alert('Invalid Actor ID!!! Actor may not exist. Please first add the actor.');
//           } else {
//             alert('Error adding movie');
//           }
//         }
//       });
//     }
//   } else {
//     this.updateMovie();
//   }
// }
