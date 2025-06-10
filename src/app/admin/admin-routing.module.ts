// src/app/admin/admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { MetodologiasComponent } from './metodologias/metodologias.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeCarrosselComponent } from './home-carrossel/home-carrossel.component';
import { SegmentosEnsinoComponent } from './segmentos-ensino/segmentos-ensino.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'diferenciais', component: DiferenciaisComponent },
      { path: 'metodologias', component: MetodologiasComponent },
      { path: 'home-banner', component: HomeBannerComponent },
      { path: 'home-carrossel', component: HomeCarrosselComponent },
      { path: 'segmentos-ensino', component: SegmentosEnsinoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
