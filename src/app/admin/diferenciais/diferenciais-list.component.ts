import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiferencialService } from './diferencial.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-diferenciais-list',
  templateUrl: './diferenciais-list.component.html',
  standalone: false,
})
export class DiferenciaisListComponent implements OnInit {
  diferenciais: any[] = [];
  modalAberto = false;
  idParaRemover: number | null = null;

  constructor(
    private diferencialService: DiferencialService,
    private notification: NotificationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.diferencialService.getAll().subscribe({
      next: res => {
        console.log('Diferenciais recebidos:', res);
        this.diferenciais = res.results;
      },
      error: err => {
        console.error('Erro ao buscar diferenciais:', err);
      },
    });
  }

  abrirModal(id: number) {
    this.idParaRemover = id;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.idParaRemover = null;
  }

  confirmarRemocao() {
    if (!this.idParaRemover) return;

    this.diferencialService.delete(this.idParaRemover).subscribe({
      next: () => {
        this.notification.success('Removido com sucesso!');
        this.diferenciais = this.diferenciais.filter(d => d.id !== this.idParaRemover);
        this.fecharModal();
      },
      error: () => {
        this.notification.error('Erro ao remover o item.');
        this.fecharModal();
      },
    });
  }
}
