import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../admin/guards/auth.guard';

import { LoginComponent } from './auth/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiferenciaisListComponent } from './diferenciais/diferenciais-list.component';
import { DiferencialFormComponent } from './diferenciais/diferencial-form.component';
import { SegmentosListComponent } from './segmentos-ensino/segmentos-ensino-list.component';
import { SegmentosFormComponent } from './segmentos-ensino/segmentos-ensino-form.component';
import { MetodologiasListComponent } from './metodologias/metodologias-list.component';
import { MetodologiasFormComponent } from './metodologias/metodologias-form.component';
import { HomeBannerListComponent } from './home-banner/home-banner-list.component';
import { HomeBannerFormComponent } from './home-banner/home-banner-form.component';
import { HomeCarrosselListComponent } from './home-carrossel/home-carrossel-list.component';
import { HomeCarrosselFormComponent } from './home-carrossel/home-carrossel-form.component';

const routes: Routes = [
  {
    path: 'admin/login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manage-diferenciais', component: DiferenciaisListComponent },
      { path: 'manage-diferenciais/novo', component: DiferencialFormComponent },
      { path: 'manage-diferenciais/editar/:id', component: DiferencialFormComponent },
      { path: 'home-banner', component: HomeBannerListComponent },
      { path: 'home-banner/novo', component: HomeBannerFormComponent },
      { path: 'home-banner/editar/:id', component: HomeBannerFormComponent },
      { path: 'home-carrossel', component: HomeCarrosselListComponent },
      { path: 'home-carrossel/novo', component: HomeCarrosselFormComponent },
      { path: 'home-carrossel/editar/:id', component: HomeCarrosselFormComponent },
      { path: 'manage-segmentos', component: SegmentosListComponent },
      { path: 'manage-segmentos/novo', component: SegmentosFormComponent },
      { path: 'manage-segmentos/editar/:id', component: SegmentosFormComponent },
      { path: 'manage-metodologias', component: MetodologiasListComponent },
      { path: 'manage-metodologias/novo', component: MetodologiasFormComponent },
      { path: 'manage-metodologias/editar/:id', component: MetodologiasFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
