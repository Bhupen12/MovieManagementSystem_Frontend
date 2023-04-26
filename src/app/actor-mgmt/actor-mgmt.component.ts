import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { ActorDialogComponent } from './actor-dialog/actor-dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActorConformBtnComponent } from './actor-conform-btn/actor-conform-btn.component';


@Component({
  selector: 'app-actor-mgmt',
  templateUrl: './actor-mgmt.component.html',
  styleUrls: ['./actor-mgmt.component.scss']
})
export class ActorMgmtComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'gender', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public ActorDialog: MatDialog,
    private api: ApiService
    ) { }
  ngOnInit(): void {
    this.getAllActors();
  }

  openDialog() {
    this.ActorDialog.open(ActorDialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(result => {
      if (result === 'save') {
        this.getAllActors();
      }
    });
  }

  getAllActors() {
    this.api.getActors().subscribe({
      next: (res) => {
        var newRes = res.sort((a: any, b: any) => b.id-a.id);
        this.dataSource = new MatTableDataSource(newRes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        // alert("Error while getting actors");
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editActor(element: any) {
    this.ActorDialog.open(ActorDialogComponent, {
      width: '30%',
      data: element
    }).afterClosed().subscribe(result => {
      if (result === 'update') {
        this.getAllActors();
      }
    });
  }

  // deleteActor(id: number) {
  //   if (confirm('Are you sure you want to delete this actor?')) {
  //     this.api.deleteActor(id).subscribe({
  //       next: (res) => {
  //         this.getAllActors();
  //       },
  //       error: (err) => {
  //         alert("Error while deleting actor");
  //       }
  //     });
  //   }
  // }  

  deleteActor(id: number) {
    console.log(id);
    const dialogref = this.ActorDialog.open(ActorConformBtnComponent,{
      data: id
    });
    dialogref.afterClosed().subscribe(
      {
        next: (val)=>{
          if(val){
            this.getAllActors();
          }
        }
      }
    )
  }
  

}
