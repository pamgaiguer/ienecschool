import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; // Verifique o caminho real do seu LoginComponent
import { AdminLayoutComponent } from './layout/admin-layout.component'; // Verifique o caminho real do seu AdminLayoutComponent
import { AuthGuard } from '../admin/guards/auth.guard'; // Verifique o caminho real do seu AuthGuard

// Importe os outros componentes aqui
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiferenciaisListComponent } from './diferenciais/diferenciais-list.component';
import { DiferencialFormComponent } from './diferenciais/diferencial-form.component';
import { SegmentosListComponent } from './segmentos-ensino/segmentos-ensino-list.component';
import { SegmentosFormComponent } from './segmentos-ensino/segmentos-ensino-form.component';
import { MetodologiasComponent } from './metodologias/metodologias.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeCarrosselComponent } from './home-carrossel/home-carrossel.component';

const routes: Routes = [
  // Esta rota 'login' está no mesmo nível do 'admin' no módulo principal,
  // mas como este é o admin-routing.module, ela será acessada como /admin/login
  {
    path: 'login',
    component: LoginComponent,
  },
  // As rotas protegidas pelo AuthGuard, que estarão sob o AdminLayoutComponent
  {
    path: '', // Este path vazio significa que as rotas filhas serão /admin/dashboard, /admin/diferenciais, etc.
    component: AdminLayoutComponent,
    canActivate: [AuthGuard], // Aplica o AuthGuard a todas as rotas filhas
    children: [
      // Redirecionamento padrão para /admin/dashboard quando acessa /admin
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
  // Adicione uma rota wildcard para redirecionar ou tratar URLs desconhecidas dentro de /admin
  {
    path: '**',
    redirectTo: 'dashboard', // Ou para a página de login se a rota não existe e o usuário não está logado
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
