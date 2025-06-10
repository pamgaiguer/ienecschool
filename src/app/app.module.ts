import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { MetodologiaEnsinoComponent } from './metodologia-ensino/metodologia-ensino.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { AdmissaoComponent } from './admissao/admissao.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoonComponent,
    MetodologiaEnsinoComponent,
    GaleriaFotosComponent,
    AdmissaoComponent,
    DiferenciaisComponent,
    SobreNosComponent,
    PublicLayoutComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ComponentsModule,
    RouterModule,
    SharedModule,
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
