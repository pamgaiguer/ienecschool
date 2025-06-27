import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
})
export class DashboardComponent implements OnInit {
  nomeUsuario: string = '...';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUsuarioLogado().subscribe({
      next: user => {
        this.nomeUsuario = `${user.first_name} ${user.last_name}`.trim();
      },
      error: err => {
        console.error('Erro ao buscar usuário logado:', err);
        this.nomeUsuario = 'Usuário';
      },
    });
  }
}
