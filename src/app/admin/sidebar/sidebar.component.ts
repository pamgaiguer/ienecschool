import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false,
})
export class SidebarComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear(); // ou authService.logout()
    this.router.navigate(['/admin/login']); // Redireciona para login
  }
}
