import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MetodologiaEnsinoComponent } from './metodologia-ensino/metodologia-ensino.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { AdmissaoComponent } from './admissao/admissao.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoonComponent,
    NavbarComponent,
    FooterComponent,
    MetodologiaEnsinoComponent,
    GaleriaFotosComponent,
    AdmissaoComponent,
    DiferenciaisComponent,
    SobreNosComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
