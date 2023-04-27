import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DirectorMgmtComponent } from '../director-mgmt.component';

@Component({
  selector: 'app-director-conform-btn',
  templateUrl: './director-conform-btn.component.html',
  styleUrls: ['./director-conform-btn.component.scss']
})
export class DirectorConformBtnComponent {

  actorName: any;

  

  constructor(
    private api: ApiService,
    private dialogref: MatDialogRef<DirectorConformBtnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) 
    { }

    ngOnInit() {
      console.log(this.data);  
      this.api.getDirectorsbyID(this.data).subscribe({
        next: (res)=>{
          this.actorName = res.name;
        }
      })
    }



    deleteActor() {
      this.api.deleteDirector(this.data).subscribe({
          next: (res) => {
            this.dialogref.close(true);
          },
          error: (err) => {
            alert('Error while deleting actor');
          }
      })
    }

}
