// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    
    constructor(
        private authService: AuthService, 
        private router: Router) 
    { }
    
    canActivate(): boolean {
        if (this.authService.isAuthentificated()) {
            return true;
        } else {
            this.router.navigate(['/Login']);
            return false;
        }
    }
}