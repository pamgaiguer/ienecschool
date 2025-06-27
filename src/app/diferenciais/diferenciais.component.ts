import { Component, OnInit } from '@angular/core';
import { DiferencialService } from '../admin/diferenciais/diferencial.service';

@Component({
  selector: 'app-diferenciais',
  templateUrl: './diferenciais.component.html',
  standalone: false,
})
export class DiferenciaisComponent implements OnInit {
  diferenciais: any[] = [];

  constructor(private diferencialService: DiferencialService) {}

  ngOnInit(): void {
    this.diferencialService.getAll().subscribe({
      next: res => {
        this.diferenciais = res.results.sort((a, b) => a.id - b.id);
      },
      error: err => {
        console.error('Erro ao buscar diferenciais:', err);
      },
    });
  }
}
