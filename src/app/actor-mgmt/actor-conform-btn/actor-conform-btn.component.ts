import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { ActorMgmtComponent } from '../actor-mgmt.component';

@Component({
  selector: 'app-actor-conform-btn',
  templateUrl: './actor-conform-btn.component.html',
  styleUrls: ['./actor-conform-btn.component.scss']
})
export class ActorConformBtnComponent {
  actorName: any;

  

  constructor(
    private api: ApiService,
    private dialogref: MatDialogRef<ActorConformBtnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) 
    { }

    ngOnInit() {
      // console.log(this.data);  
      // this.api.getActorsbyID(this.data).subscribe({
      //   next: (res)=>{
      //     this.actorName = res.name;
      //   }
      // })
    }



    deleteActor() {
      this.api.deleteActor(this.data).subscribe({
          next: (res) => {
            this.dialogref.close(true);
          },
          error: (err) => {
            alert('Error while deleting actor');
          }
      })
    }
}
