import { Component, OnInit } from '@angular/core';
import { HomeCarroselService } from './home-carrossel.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { ToastrService } from 'ngx-toastr';

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
    private hCarrosselService: HomeCarroselService,
    private notification: NotificationService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.hCarrosselService.getAll().subscribe({
      next: res => {
        this.homeCarrossel = res.results.sort((a, b) => a.id - b.id);
      },
      error: err => {
        console.error('Erro ao inserir banner:', err);
      },
    });
  }

  toggleCampo(id: number, campo: 'ativo' | 'ordem', valor: boolean) {
    const formData = new FormData();
    formData.append(campo, String(valor));

    this.hCarrosselService.update(id, formData).subscribe({
      next: () => {
        const item = this.homeCarrossel.find(b => b.id === id);
        if (item) item[campo] = valor;
        this.toastr.success(`Campo "${campo}" atualizado.`);
      },
      error: () => {
        this.toastr.error('Erro ao atualizar o campo.');
      },
    });
  }

  onToggleChange(event: Event, hBannerId: number, campo: 'ativo' | 'ordem') {
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

    this.hCarrosselService.delete(this.idParaRemover).subscribe({
      next: () => {
        this.notification.success('Removido com sucesso!');
        this.homeCarrossel = this.homeCarrossel.filter(d => d.id !== this.idParaRemover);
        this.fecharModal();
      },
      error: () => {
        this.notification.error('Erro ao remover o banner.');
        this.fecharModal();
      },
    });
  }
}
