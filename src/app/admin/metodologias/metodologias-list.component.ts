import { Component, OnInit } from '@angular/core';
import { MetodologiasService } from './metodologias.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-metodologias-list',
  templateUrl: './metodologias-list.component.html',
  standalone: false,
})
export class MetodologiasListComponent implements OnInit {
  metodologias: any[] = [];
  modalAberto = false;
  idParaRemover: number | null = null;

  constructor(
    private metodologiaService: MetodologiasService,
    private notification: NotificationService,
  ) {}

  ngOnInit(): void {
    this.metodologiaService.getAll().subscribe({
      next: res => {
        console.log('metodologias recebidos:', res);
        this.metodologias = res.results;
      },
      error: err => {
        console.error('Erro ao buscar metodologia:', err);
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

    this.metodologiaService.delete(this.idParaRemover).subscribe({
      next: () => {
        this.notification.success('Removido com sucesso!');
        this.metodologias = this.metodologias.filter(d => d.id !== this.idParaRemover);
        this.fecharModal();
      },
      error: () => {
        this.notification.error('Erro ao remover o item.');
        this.fecharModal();
      },
    });
  }
}
