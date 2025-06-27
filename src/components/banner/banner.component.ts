import { Component } from '@angular/core';
import { BannerService, Banner } from './banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  standalone: false,
})
export class BannerComponent {
  banners: Banner[] = [];
  currentSlide = 0;
  private intervalId: any;

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    this.bannerService.getAll().subscribe({
      next: response => {
        this.banners = response.results.filter(b => b.ativo && b.usar_como_carrossel);
        this.startAutoSlide();
      },
      error: err => {
        console.error('Erro ao carregar banners:', err);
      },
    });
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 7000); // 7 segundos
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.banners.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.banners.length) % this.banners.length;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
