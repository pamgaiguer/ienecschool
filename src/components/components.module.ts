import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { CarousselHomeComponent } from './caroussel-home/caroussel-home.component';

@NgModule({
  declarations: [BannerComponent, CarousselHomeComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [BannerComponent, CarousselHomeComponent],
})
export class ComponentsModule {}
