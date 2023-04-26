import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { MovieMgmtComponent } from '../movie-mgmt.component';

@Component({
  selector: 'app-conform-btn',
  templateUrl: './conform-btn.component.html',
  styleUrls: ['./conform-btn.component.scss']
})
export class ConformBtnComponent implements OnInit{
  movieName: any;

  

  constructor(
    private api: ApiService,
    private dialogref: MatDialogRef<ConformBtnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) 
    { }

    ngOnInit() {
      console.log(this.data);  
      this.api.getMoviebyID(this.data).subscribe({
        next: (res)=>{
          this.movieName = res.title;
        }
      })
    }



    deleteMovie() {
      this.api.deleteMovie(this.data).subscribe({
          next: (res) => {
            this.dialogref.close(true);
          },
          error: (err) => {
            alert('Error while deleting movie');
          }
      })
    }
}
