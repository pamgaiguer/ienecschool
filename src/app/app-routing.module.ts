import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { MetodologiaEnsinoComponent } from './metodologia-ensino/metodologia-ensino.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { PublicLayoutComponent } from './layout/public-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'diferenciais', component: DiferenciaisComponent },
  { path: 'metodologias', component: MetodologiaEnsinoComponent },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
