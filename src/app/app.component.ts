import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieActorMgmt';

  constructor(private elRef: ElementRef,private renderer: Renderer2) {}

  changeColor(buttonName: string) {
    const actBtn = this.elRef.nativeElement.querySelector('button[routerLink="/actor-mgmt"]');
    const movBtn = this.elRef.nativeElement.querySelector('button[routerLink="/movie-mgmt"]');
    if(buttonName === 'actor') {
      this.renderer.setStyle(actBtn, 'background-color', '#bdb7b6');
      this.renderer.setStyle(actBtn, 'color', 'black');
      this.renderer.setStyle(movBtn, 'background-color', '#f44336');
      this.renderer.setStyle(movBtn, 'color', 'black');
    } else if(buttonName === 'movie') {
      this.renderer.setStyle(movBtn, 'background-color', '#bdb7b6');
      this.renderer.setStyle(movBtn, 'color', 'black');
      this.renderer.setStyle(actBtn, 'background-color', '#f44336');
      this.renderer.setStyle(actBtn, 'color', 'black');
    }
  }
}
