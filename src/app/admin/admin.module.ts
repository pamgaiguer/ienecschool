import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiferenciaisListComponent } from './diferenciais/diferenciais-list.component';
import { DiferencialFormComponent } from './diferenciais/diferencial-form.component';
import { MetodologiasListComponent } from './metodologias/metodologias-list.component';
import { MetodologiasFormComponent } from './metodologias/metodologias-form.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeCarrosselComponent } from './home-carrossel/home-carrossel.component';
import { SegmentosFormComponent } from './segmentos-ensino/segmentos-ensino-form.component';
import { SegmentosListComponent } from './segmentos-ensino/segmentos-ensino-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    DiferenciaisListComponent,
    DiferencialFormComponent,
    MetodologiasListComponent,
    MetodologiasFormComponent,
    HomeBannerComponent,
    HomeCarrosselComponent,
    SegmentosFormComponent,
    SegmentosListComponent,
    SidebarComponent,
    LoginComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, ReactiveFormsModule, FormsModule, AdminRoutingModule],
  providers: [AuthGuard],
  exports: [AdminLayoutComponent],
})
export class AdminModule {}
