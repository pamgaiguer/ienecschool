import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';

const routes: Routes = [
  { path: '', redirectTo: 'soon', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'soon', component: SoonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
