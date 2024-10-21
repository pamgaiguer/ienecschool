import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { AdmissaoComponent } from './admissao/admissao.component';
import { MetodologiaEnsinoComponent } from './metodologia-ensino/metodologia-ensino.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'soon', component: SoonComponent },
  { path: 'matriculas', component: AdmissaoComponent },
  { path: 'metodologia', component: MetodologiaEnsinoComponent },
  { path: 'diferenciais', component: DiferenciaisComponent },
  { path: 'galeria', component: GaleriaFotosComponent },
  { path: 'admissao', component: AdmissaoComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
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
