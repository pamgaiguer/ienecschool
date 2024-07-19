import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SegmentosEnsinoComponent } from './segmentos-ensino/segmentos-ensino.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { AdmissaoComponent } from './admissao/admissao.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        SoonComponent,
        NavbarComponent,
        FooterComponent,
        SegmentosEnsinoComponent,
        GaleriaFotosComponent,
        AdmissaoComponent,
        DiferenciaisComponent,
        SobreNosComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule, ComponentsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
