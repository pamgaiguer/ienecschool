import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}
  title = 'Colégio Ienec';

  isAdminLogin(): boolean {
    return this.router.url === '/admin/login';
  }

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
