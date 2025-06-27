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

  getUsuarioLogado() {
    return this.http.get<{
      id: number;
      username: string;
      email: string;
      first_name: string;
      last_name: string;
    }>(`${environment.apiUrl}/api/user/me/`);
  }
}
