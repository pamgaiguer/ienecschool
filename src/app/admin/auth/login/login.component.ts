import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    if (this.loginForm.valid) {
      const { login, senha } = this.loginForm.value;
      this.authService.login(login, senha).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.access);
          this.router.navigate(['/admin/dashboard']);
          this.toastr.success('Login efetuado com sucesso!');
        },
        error: err => {
          this.error = 'Login ou senha inválidos';
          this.toastr.error('Login ou senha inválidos');
        },
      });
    } else {
      this.error = 'Por favor, preencha todos os campos corretamente.';
      this.loginForm.markAllAsTouched();
    }
  }
}
