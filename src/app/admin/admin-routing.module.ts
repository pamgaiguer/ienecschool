// src/app/admin/admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { DiferenciaisListComponent } from './diferenciais/diferenciais-list.component';
import { DiferencialFormComponent } from './diferenciais/diferencial-form.component';
import { MetodologiasComponent } from './metodologias/metodologias.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeCarrosselComponent } from './home-carrossel/home-carrossel.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SegmentosListComponent } from './segmentos-ensino/segmentos-ensino-list.component';
import { SegmentosFormComponent } from './segmentos-ensino/segmentos-ensino-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'diferenciais', component: DiferenciaisListComponent },
      { path: 'diferenciais/novo', component: DiferencialFormComponent },
      { path: 'diferenciais/editar/:id', component: DiferencialFormComponent },
      { path: 'segmentos-ensino', component: SegmentosListComponent },
      { path: 'segmentos-ensino/novo', component: SegmentosFormComponent },
      { path: 'segmentos-ensino/editar/:id', component: SegmentosFormComponent },

      { path: 'metodologias', component: MetodologiasComponent },
      { path: 'home-banner', component: HomeBannerComponent },
      { path: 'home-carrossel', component: HomeCarrosselComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
