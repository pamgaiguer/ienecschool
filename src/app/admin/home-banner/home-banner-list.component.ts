import { Component, OnInit } from '@angular/core';
import { HomeBannerService } from './home-banner.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { ToastrService } from 'ngx-toastr';

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
    private hBannerService: HomeBannerService,
    private notification: NotificationService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.hBannerService.getAll().subscribe({
      next: res => {
        this.homeBanner = res.results.sort((a, b) => a.id - b.id);
      },
      error: err => {
        console.error('Erro ao inserir banner:', err);
      },
    });
  }

  toggleCampo(id: number, campo: 'ativo' | 'usar_como_carrossel', valor: boolean) {
    const formData = new FormData();
    formData.append(campo, String(valor));

    this.hBannerService.update(id, formData).subscribe({
      next: () => {
        const item = this.homeBanner.find(b => b.id === id);
        if (item) item[campo] = valor;
        this.toastr.success(`Campo "${campo}" atualizado.`);
      },
      error: () => {
        this.toastr.error('Erro ao atualizar o campo.');
      },
    });
  }

  onToggleChange(event: Event, hBannerId: number, campo: 'ativo' | 'usar_como_carrossel') {
    const input = event.target as HTMLInputElement;
    this.toggleCampo(hBannerId, campo, input.checked);
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

    this.hBannerService.delete(this.idParaRemover).subscribe({
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
