import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
})
export class DashboardComponent implements OnInit {
  nomeUsuario: string = 'Pam Gaiguer'; // simulação, depois pode vir do AuthService

  constructor() {}

  ngOnInit(): void {}
}
