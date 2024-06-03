import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { AdmissaoComponent } from './admissao/admissao.component';
import { CorpoDocenteComponent } from './corpo-docente/corpo-docente.component';
import { ProgramaEscolarComponent } from './programa-escolar/programa-escolar.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'soon', component: SoonComponent },
  { path: 'matriculas', component: AdmissaoComponent },
  { path: 'corpo-docente', component: CorpoDocenteComponent },
  { path: 'programa-escolar', component: ProgramaEscolarComponent },
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
