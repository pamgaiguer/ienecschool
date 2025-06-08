import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
      .post('http://localhost:8000/api/token/', {
        login: this.login,
        senha: this.senha,
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
