import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarrosselService, CarrosselItem } from './caroussel-home.service';

@Component({
  selector: 'app-caroussel-home',
  templateUrl: './caroussel-home.component.html',
  standalone: false,
})
export class CarousselHomeComponent implements OnInit, OnDestroy {
  carrosselItems: CarrosselItem[] = [];
  currentSlideIndex = 0;
  isLoading = true;
  private intervalId: any;

  constructor(private carrosselService: CarrosselService) {}

  ngOnInit(): void {
    this.carrosselService.getAll().subscribe({
      next: response => {
        this.carrosselItems = response.results.filter(item => item.ativo).sort((a, b) => a.ordem - b.ordem);
        this.isLoading = false;
        this.startAutoSlide();
      },
      error: err => {
        console.error('Erro ao carregar carrossel:', err);
        this.isLoading = false;
      },
    });
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 7000);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carrosselItems.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.carrosselItems.length) % this.carrosselItems.length;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
