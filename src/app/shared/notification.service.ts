import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notyf: Notyf;

  constructor() {
    this.notyf = new Notyf({
      duration: 4000,
      position: { x: 'right', y: 'top' },
    });
  }

  private centerTopNotyf = new Notyf({
    duration: 0,
    position: { x: 'center', y: 'top' },
  });

  success(message: string) {
    this.notyf.success(message);
  }

  error(message: string) {
    this.notyf.error(message);
  }

  show(message: string) {
    this.notyf.open({ type: 'info', message });
  }

  confirm(message: string, onConfirm: () => void) {
    const toast = this.centerTopNotyf.open({
      type: 'confirm',
      message: `
        <div class="toast-confirm-content">
          <strong class="toast-title">Deseja realmente remover este item?</strong>
          <div class="toast-actions">
            <button class="toast-btn cancelar">Cancelar</button>
            <button class="toast-btn confirmar">Remover</button>
          </div>
        </div>
      `,
      dismissible: true,
      duration: 0,
    });

    setTimeout(() => {
      const cancelBtn = document.querySelector('.cancelar') as HTMLButtonElement;
      const confirmBtn = document.querySelector('.confirmar') as HTMLButtonElement;

      cancelBtn?.addEventListener('click', () => this.notyf.dismiss(toast));
      confirmBtn?.addEventListener('click', () => {
        this.notyf.dismiss(toast);
        onConfirm();
      });
    });
  }
}
