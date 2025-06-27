import { Component, OnInit } from '@angular/core';
import { MetodologiasService } from '../admin/metodologias/metodologias.service';

@Component({
  selector: 'app-metodologia-ensino',
  templateUrl: './metodologia-ensino.component.html',
  standalone: false,
})
export class MetodologiaEnsinoComponent implements OnInit {
  metodologiaItens: any[] = [];

  constructor(private metodoService: MetodologiasService) {}

  ngOnInit(): void {
    this.metodoService.getAll().subscribe({
      next: res => {
        this.metodologiaItens = res.results.sort((a, b) => a.id - b.id);
      },
      error: err => {
        console.error('Erro ao buscar metodologias', err);
      },
    });
  }
}
