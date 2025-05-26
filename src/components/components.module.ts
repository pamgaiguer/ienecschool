import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [BannerComponent],
})
export class ComponentsModule {}
