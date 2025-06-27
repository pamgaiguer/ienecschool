import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/token/`;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(login: string, senha: string) {
    return this.http.post(this.apiUrl, {
      username: login,
      password: senha,
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const decoded: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    } catch (e) {
      return false;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      const decoded: any = jwtDecode(token);
      return decoded.username || null;
    } catch (e) {
      return null;
    }
  }
}
