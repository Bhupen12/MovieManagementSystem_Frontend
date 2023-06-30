import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private tokenKey = 'token';

    constructor(
        private router: Router
    ) { }


    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
        }

    setToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
        }
    

    verifyToken(token: string): boolean {
        const storedToken = localStorage.getItem(this.tokenKey);
        return token === storedToken;
        }

    removeToken(): void {
        localStorage.removeItem(this.tokenKey);
        }

    isAuthentificated(): boolean {
        const token = this.getToken();
        if (token) {
            return this.verifyToken(token);
            }
        return false;
        }
    
    logout(): void {
        this.removeToken();
        this.router.navigate(['/Login']);
        }   
}