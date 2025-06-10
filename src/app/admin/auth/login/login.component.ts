import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environments';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
})
export class LoginComponent {
  login = '';
  senha = '';
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  onSubmit() {
    this.error = '';
    this.http
      .post(`${environment.apiUrl}/api/token/`, {
        username: this.login,
        password: this.senha,
      })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.access);
          this.router.navigate(['/admin']);
        },
        error: () => {
          this.error = 'Login ou senha inválidos';
        },
      });
  }
}
