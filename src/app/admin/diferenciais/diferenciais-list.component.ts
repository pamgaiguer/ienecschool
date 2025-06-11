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

  remover(id: number) {
    this.notification.confirm('Deseja realmente remover este item?', () => {
      this.diferencialService.delete(id).subscribe({
        next: () => this.notification.success('Removido com sucesso!'),
        error: () => this.notification.error('Erro ao remover o item.'),
      });
    });
  }
}
