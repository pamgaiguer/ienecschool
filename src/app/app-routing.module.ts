import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { AdmissaoComponent } from './admissao/admissao.component';
import { MetodologiaEnsinoComponent } from './metodologia-ensino/metodologia-ensino.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { PublicLayoutComponent } from './layout/public-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'soon', component: SoonComponent },
      { path: 'metodologias', component: MetodologiaEnsinoComponent },
      { path: 'diferenciais', component: DiferenciaisComponent },
      { path: 'admissao', component: AdmissaoComponent },
    ],
  },
  //rotas modulo admin
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
