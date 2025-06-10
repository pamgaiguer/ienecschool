import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
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
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit() {
    this.error = '';

    this.authService.login(this.login, this.senha).subscribe({
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
