import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    // aqui depois adicionamos outros componentes, tipo DashboardComponent etc.
  ],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
})
export class AdminModule {}
