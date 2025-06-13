import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.checkRoute();
      this.cdr.detectChanges(); // Garante atualização do DOM
    });
  }

  title = 'Colégio Ienec';

  private isLoginRouteResult: boolean = false; // Nova variável para /login
  private isAdminLoginResult: boolean = false;
  private isAdminRouteResult: boolean = false;

  isLoginRoute(): boolean {
    console.log('isLoginRoute:', this.isLoginRouteResult, 'URL:', this.router.url);
    return this.isLoginRouteResult;
  }

  isAdminLogin(): boolean {
    console.log('isAdminLogin:', this.isAdminLoginResult, 'URL:', this.router.url);
    return this.isAdminLoginResult;
  }

  isAdminRoute(): boolean {
    console.log('isAdminRoute:', this.isAdminRouteResult, 'URL:', this.router.url);
    return this.isAdminRouteResult;
  }

  private checkRoute() {
    const currentRoute = this.router.url;
    this.isLoginRouteResult = currentRoute === '/login'; // Detecta a rota pública /login
    this.isAdminLoginResult = currentRoute === '/admin/login';
    this.isAdminRouteResult = currentRoute.startsWith('/admin/') && currentRoute !== '/admin/login';
    console.log(
      'checkRoute - URL:',
      currentRoute,
      'isLoginRoute:',
      this.isLoginRouteResult,
      'isAdminLogin:',
      this.isAdminLoginResult,
      'isAdminRoute:',
      this.isAdminRouteResult,
    );
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
