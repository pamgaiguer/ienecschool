import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.checkRoute();
      this.cdr.detectChanges();
    });
  }

  title = 'Colégio Ienec';

  private isLoginRouteResult: boolean = false;
  private isAdminLoginResult: boolean = false;
  private isAdminRouteResult: boolean = false;

  isLoginRoute(): boolean {
    return this.isLoginRouteResult;
  }

  isAdminLogin(): boolean {
    return this.isAdminLoginResult;
  }

  isAdminRoute(): boolean {
    return this.isAdminRouteResult;
  }

  private checkRoute() {
    const currentRoute = this.router.url;
    this.isLoginRouteResult = currentRoute === '/login'; // Detecta a rota pública /login
    this.isAdminLoginResult = currentRoute === '/admin/login';
    this.isAdminRouteResult = currentRoute.startsWith('/admin/') && currentRoute !== '/admin/login';
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
