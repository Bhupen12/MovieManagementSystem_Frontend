import { Component, OnInit, Injectable } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { DialogComponent } from './dialog/dialog.component';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ConformBtnComponent } from './conform-btn/conform-btn.component';



@Component({
  selector: 'app-movie-mgmt',
  templateUrl: './movie-mgmt.component.html',
  styleUrls: ['./movie-mgmt.component.scss']
})
export class MovieMgmtComponent implements OnInit {

  displayedColumns: string[] = ['title', 'releaseYear', 'genre' ,'actor', 'director' , 'action'];
  dataSource!: MatTableDataSource<any>;
  actNm!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService,private http: HttpClient) {}
  ngOnInit(): void {
    this.getAllMovies();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(result => {
      if (result === 'save') {
        this.getAllMovies();
      }
    });
  }

  getAllMovies(): void {
    this.api.getMovies().subscribe({
      next: (res) => {
        console.log(res); 
        var newRes = res.sort((a: any, b: any) => b.id-a.id);
        console.log(newRes);

        for(let i = 0; i < newRes.length; i++){
          newRes[i].actor = newRes[i].actor?.name;
          newRes[i].director = newRes[i].director?.name;
        }

        this.dataSource = new MatTableDataSource(newRes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Error While fetching movies!!!');
      }
    });
  }

  editMovie(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(result => {
      if (result === 'update') {
        this.getAllMovies();
      }
    });
  }

  
  deleteMovie(id: any){
    console.log(id);
    const dialogref = this.dialog.open(ConformBtnComponent,{
      data: id
    });
    dialogref.afterClosed().subscribe(
      {
        next: (val)=>{
          if(val){
            this.getAllMovies();
          }
        }
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
