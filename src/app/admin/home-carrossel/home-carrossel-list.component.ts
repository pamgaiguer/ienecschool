import { Component, OnInit } from '@angular/core';
import { HomeCarrosselService } from './home-carrossel.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-home-carrossel-list',
  templateUrl: './home-carrossel-list.component.html',
  standalone: false,
})
export class HomeCarrosselListComponent implements OnInit {
  homeCarrossel: any[] = [];
  modalAberto = false;
  idParaRemover: number | null = null;

  constructor(
    private homeCarrosselService: HomeCarrosselService,
    private notification: NotificationService,
  ) {}

  ngOnInit(): void {
    this.homeCarrosselService.getAll().subscribe({
      next: res => {
        console.log('metodologias recebidos:', res);
        this.homeCarrossel = res.results;
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

    this.homeCarrosselService.delete(this.idParaRemover).subscribe({
      next: () => {
        this.notification.success('Removido com sucesso!');
        this.homeCarrossel = this.homeCarrossel.filter(d => d.id !== this.idParaRemover);
        this.fecharModal();
      },
      error: () => {
        this.notification.error('Erro ao remover o item.');
        this.fecharModal();
      },
    });
  }
}
