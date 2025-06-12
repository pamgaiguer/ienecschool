import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 IMPORTANTE
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalConfirmacaoComponent } from '../../app/shared/modal-confirmacao/modal-confirmacao.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ModalConfirmacaoComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
