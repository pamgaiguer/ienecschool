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
import { SegmentosFormComponent } from './segmentos-ensino/segmentos-ensino-form.component';
import { SegmentosListComponent } from './segmentos-ensino/segmentos-ensino-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

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
    SegmentosFormComponent,
    SegmentosListComponent,
    SidebarComponent,
    LoginComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, ReactiveFormsModule, FormsModule, AdminRoutingModule],
  exports: [AdminLayoutComponent],
})
export class AdminModule {}
