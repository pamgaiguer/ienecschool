import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/token/`;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(username: string, password: string) {
    return this.http.post(`${environment.apiUrl}/api/token/`, {
      username,
      password,
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
