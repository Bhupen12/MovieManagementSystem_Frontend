import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getActorData(){
    return this.http.get<any>('http://localhost:5278/api/actor/')
    .pipe(
      map((response:[]) => response.map(item => item['name']))
    );
  }
  getDirectorData(){
    return this.http.get<any>('http://localhost:5278/api/directors/')
    .pipe(
      map((response:[]) => response.map(item => item['name']))
    );
  }

  getActorId(actorName: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.get<any>('http://localhost:5278/api/actor/search', { params: { name: actorName } })
        .subscribe({
          next: (response) => {
            if (response && response.length > 0) {
              resolve(response[0].id);
            } else {
              reject('Actor not found');
            }
          },
          error: (err) => {
            reject('Error getting actor ID');
          }
        });
    });
  }    

  getDirectorId(directorName: string): Promise<string>{
    return new Promise<string>((resolve,reject)=>{
      this.http.get<any>('http://localhost:5278/api/directors/search',{ params: {name: directorName}})
        .subscribe({
          next: (response) => {
            if (response && response.length > 0) {
              resolve(response[0].id);
            } else {
              reject('Director not found');
            } 
          },
          error: (err) => {
            reject('Error getting director ID');
          }
        })
    })
  }

  postMovie(data: any){
    return this.http.post<any>('http://localhost:5278/api/movie/', data);
  }
  getMovies(){
    return this.http.get<any>('http://localhost:5278/api/movie/');
  }
  getMoviebyID(id: number){
    return this.http.get<any>('http://localhost:5278/api/movie/'+id);
  }
  putMovie(data: any, id: number){
    return this.http.put<any>("http://localhost:5278/api/movie/"+id, data);
  }
  deleteMovie(id: number){
    return this.http.delete<any>("http://localhost:5278/api/movie/"+id);
  }



  getActors(){
    return this.http.get<any>('http://localhost:5278/api/actor/');
  }
  getActorbyID(id: number){
    return this.http.get<any>('http://localhost:5278/api/actor/'+id);
  }
  postActor(data: any){
    return this.http.post<any>('http://localhost:5278/api/actor/', data);
  }
  putActor(data: any, id: number){
    return this.http.put<any>("http://localhost:5278/api/actor/"+id, data);
  }
  deleteActor(id: number){
    return this.http.delete<any>("http://localhost:5278/api/actor/"+id);
  }



  getDirectors(){
    return this.http.get<any>('http://localhost:5278/api/directors/');
  }  
  getDirectorsbyID(id: number){
    return this.http.get<any>('http://localhost:5278/api/Directors/'+id);
  }
  postDirector(data: any){
    return this.http.post<any>('http://localhost:5278/api/Directors/', data);
  }
  putDirector(data: any, id: number){
    return this.http.put<any>("http://localhost:5278/api/Directors/"+id, data);
  }
  deleteDirector(id: number){
    return this.http.delete<any>("http://localhost:5278/api/directors/"+id);
  }
}
