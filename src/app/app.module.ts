import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PublicLayoutComponent } from './layout/public-layout.component';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { MetodologiaEnsinoComponent } from './metodologia-ensino/metodologia-ensino.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { AdmissaoComponent } from './admissao/admissao.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './admin/guards/auth.guard';
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
  imports: [
    BrowserModule,
    AdminModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard, // <- Adicione esta linha
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
