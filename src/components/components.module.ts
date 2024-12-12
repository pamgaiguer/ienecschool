import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [ContactFormComponent, BannerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContactFormComponent, BannerComponent],
})
export class ComponentsModule {}
