import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegmentoService } from './segmentos-ensino.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-segmentos-ensino-list',
  templateUrl: './segmentos-ensino-list.component.html',
  standalone: false,
})
export class SegmentosListComponent implements OnInit {
  segmentos: any[] = [];
  modalAberto = false;
  idParaRemover: number | null = null;

  constructor(
    private SegmentoService: SegmentoService,
    private notification: NotificationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.SegmentoService.getAll().subscribe({
      next: res => {
        console.log('segmentos recebidos:', res);
        this.segmentos = res.results;
      },
      error: err => {
        console.error('Erro ao buscar segmentos:', err);
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

    this.SegmentoService.delete(this.idParaRemover).subscribe({
      next: () => {
        this.notification.success('Removido com sucesso!');
        this.segmentos = this.segmentos.filter(d => d.id !== this.idParaRemover);
        this.fecharModal();
      },
      error: () => {
        this.notification.error('Erro ao remover o item.');
        this.fecharModal();
      },
    });
  }
}
