import { Component, OnInit } from '@angular/core';
import { DiferencialService } from '../admin/diferenciais/diferencial.service';
import { MetodologiasService } from '../admin/metodologias/metodologias.service';
import { SegmentoService } from '../admin/segmentos-ensino/segmentos-ensino.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  diferenciaisItens: any[] = [];
  metodologiasItens: any[] = [];
  segmentosItens: any[] = [];
  diferenciais: any;

  constructor(
    private diferencialService: DiferencialService,
    private metodoService: MetodologiasService,
    private segmentoService: SegmentoService,
  ) {}

  ngOnInit(): void {
    this.diferencialService.getAll().subscribe({
      next: res => {
        this.diferenciaisItens = res.results.sort((a, b) => a.id - b.id);
      },
      error: err => {
        console.error('Erro ao buscar diferenciais:', err);
      },
    });

    this.metodoService.getAll().subscribe({
      next: res => {
        this.metodologiasItens = res.results.sort((a, b) => a.id - b.id);
      },
      error: err => {
        console.error('Erro ao buscar metodologias:', err);
      },
    });

    this.segmentoService.getAll().subscribe({
      next: res => {
        this.segmentosItens = res.results.sort((a, b) => a.id - b.id);
      },
      error: err => {
        console.error('Erro ao buscar segmentos:', err);
      },
    });
  }

  carouselImages: string[] = [
    'assets/fotos/galeria-colegio.jpg',
    'assets/fotos/galeria-ensino-medio-1.jpg',
    'assets/fotos/galeria-ensino-medio-2.jpg',
    'assets/fotos/galeria-ensino-medio-3.jpg',
    'assets/fotos/galeria-fundI-1.jpg',
    'assets/fotos/galeria-fundI-2.jpg',
    'assets/fotos/galeria-fundI-3.jpg',
    'assets/fotos/galeria-fundI-4.jpg',
    'assets/fotos/galeria-fundII-1.jpg',
    'assets/fotos/galeria-fundII-2.jpg',
    'assets/fotos/galeria-fundII-3.jpg',
    'assets/fotos/galeria-fundII-4.jpg',
    'assets/fotos/galeria-fundII-5.jpg',
    'assets/fotos/galeria-fundII-6.jpg',
    'assets/fotos/galeria-infantil-1.jpg',
    'assets/fotos/galeria-infantil-2.jpg',
    'assets/fotos/galeria-infantil-3.jpg',
    'assets/fotos/galeria-lobato2.jpg',
  ];
  currentSlideIndex: number = 0;

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselImages.length;
  }

  prevSlide(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
