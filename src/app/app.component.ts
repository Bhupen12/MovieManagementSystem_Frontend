import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'MovieActorMgmt';

  // constructor(private elRef: ElementRef,private renderer: Renderer2, private router: Router) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       const currentUrl = event.url;
  //       const actBtn = this.elRef.nativeElement.querySelector('button[routerLink="/actor-mgmt"]');
  //       const movBtn = this.elRef.nativeElement.querySelector('button[routerLink="/movie-mgmt"]');
  //       const dirBtn = this.elRef.nativeElement.querySelector('button[routerLink="/director-mgmt"]');
  //       if (currentUrl.includes('actor')) {
  //         this.renderer.setStyle(actBtn, 'background-color', '#bdb7b6');
  //         this.renderer.setStyle(actBtn, 'color', 'black');
  //         this.renderer.setStyle(movBtn, 'background-color', '#f44336');
  //         this.renderer.setStyle(movBtn, 'color', '#ffffff');
  //         this.renderer.setStyle(dirBtn, 'background-color', '#f44336');
  //         this.renderer.setStyle(dirBtn, 'color', '#ffffff');
  //       } else if (currentUrl.includes('movie')) {
  //         this.renderer.setStyle(movBtn, 'background-color', '#bdb7b6');
  //         this.renderer.setStyle(movBtn, 'color', 'black');
  //         this.renderer.setStyle(actBtn, 'background-color', '#f44336');
  //         this.renderer.setStyle(actBtn, 'color', '#ffffff');
  //         this.renderer.setStyle(dirBtn, 'background-color', '#f44336');
  //         this.renderer.setStyle(dirBtn, 'color', '#ffffff');
  //       } else if (currentUrl.includes('director')) {
  //         this.renderer.setStyle(dirBtn, 'background-color', '#bdb7b6');
  //         this.renderer.setStyle(dirBtn, 'color', 'black');
  //         this.renderer.setStyle(actBtn, 'background-color', '#f44336');
  //         this.renderer.setStyle(actBtn, 'color', '#ffffff');
  //         this.renderer.setStyle(movBtn, 'background-color', '#f44336');
  //         this.renderer.setStyle(movBtn, 'color', '#ffffff');
  //       }
  //     }
  //   });
  // }
}
