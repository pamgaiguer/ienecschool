import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './auth/login/login.component';

import { AdminLayoutComponent } from './layout/admin-layout.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { DiferenciaisListComponent } from './diferenciais/diferenciais-list.component';
import { DiferencialFormComponent } from './diferenciais/diferencial-form.component';

import { MetodologiasComponent } from './metodologias/metodologias.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeCarrosselComponent } from './home-carrossel/home-carrossel.component';
import { SegmentosEnsinoComponent } from './segmentos-ensino/segmentos-ensino.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    DiferenciaisComponent,
    DiferenciaisListComponent,
    DiferencialFormComponent,
    MetodologiasComponent,
    HomeBannerComponent,
    HomeCarrosselComponent,
    SegmentosEnsinoComponent,
    SidebarComponent,
    LoginComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, AdminRoutingModule],
  exports: [AdminLayoutComponent],
})
export class AdminModule {}
