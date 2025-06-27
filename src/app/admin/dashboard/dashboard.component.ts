import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
})
export class DashboardComponent implements OnInit {
  nomeUsuario: string = '...'; // será preenchido dinamicamente

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const nome = this.authService.getUsername();
    this.nomeUsuario = nome ?? 'Usuário';
  }
}
