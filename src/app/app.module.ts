import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CorpoDocenteComponent } from './corpo-docente/corpo-docente.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { AdmissaoComponent } from './admissao/admissao.component';
import { ProgramaEscolarComponent } from './programa-escolar/programa-escolar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoonComponent,
    NavbarComponent,
    FooterComponent,
    CorpoDocenteComponent,
    GaleriaFotosComponent,
    AdmissaoComponent,
    ProgramaEscolarComponent,
    SobreNosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
