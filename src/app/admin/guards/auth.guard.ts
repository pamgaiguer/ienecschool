import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    // console.log('AuthGuard - Token encontrado:', token); // Debug
    // console.log('AuthGuard - Token existe:', !!token); // Debug

    if (token) {
      // console.log('AuthGuard - Permitindo acesso'); // Debug
      return true;
    }

    // console.log('AuthGuard - Redirecionando para login'); // Debug
    this.router.navigate(['/admin/login']);
    return false;
  }
}
