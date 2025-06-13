import { Component, OnInit } from '@angular/core';
import { HomeBannerService } from './home-banner.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-home-banner-list',
  templateUrl: './home-banner-list.component.html',
  standalone: false,
})
export class HomeBannerListComponent implements OnInit {
  homeBanner: any[] = [];
  modalAberto = false;
  idParaRemover: number | null = null;

  constructor(
    private homeBannerService: HomeBannerService,
    private notification: NotificationService,
  ) {}

  ngOnInit(): void {
    this.homeBannerService.getAll().subscribe({
      next: res => {
        console.log('banner inserido:', res);
        this.homeBanner = res.results;
      },
      error: err => {
        console.error('Erro ao inserir banner:', err);
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

    this.homeBannerService.delete(this.idParaRemover).subscribe({
      next: () => {
        this.notification.success('Removido com sucesso!');
        this.homeBanner = this.homeBanner.filter(d => d.id !== this.idParaRemover);
        this.fecharModal();
      },
      error: () => {
        this.notification.error('Erro ao remover o banner.');
        this.fecharModal();
      },
    });
  }
}
