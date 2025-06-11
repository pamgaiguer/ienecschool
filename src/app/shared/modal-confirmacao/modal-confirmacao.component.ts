import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  standalone: false,
})
export class ModalConfirmacaoComponent {
  @Input() visivel: boolean = false;
  @Input() titulo?: string;
  @Input() mensagem?: string;
  @Input() textoConfirmar?: string;

  @Output() onConfirmar = new EventEmitter<void>();
  @Output() onCancelar = new EventEmitter<void>();

  confirmar() {
    this.onConfirmar.emit();
  }

  cancelar() {
    this.onCancelar.emit();
  }
}
