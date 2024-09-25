import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  diferenciaisItens: any[] = [];
  segmentosItens: any[] = [];
  teste: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDiferenciais().subscribe(data => {
      this.diferenciaisItens = data;
    });

    this.dataService.getSegmentosEnsino().subscribe(data => {
      this.segmentosItens = data;
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
    'assets/fotos/galeria-lobato1.jpg',
    'assets/fotos/galeria-lobato2.jpg',
    'assets/fotos/galeria-lobato3.jpg',
  ];

  partnerImages: any[] = [
    { src: 'assets/parceiros-ANGLO.png', alt: 'Anglo' },
    { src: 'assets/parceiros-CAMBRIDGE.png', alt: 'Cambridge' },
    { src: 'assets/parceiros-PLENO.png', alt: 'Pleno' },
    { src: 'assets/parceiros-PLURAL.png', alt: 'Plural' },
    { src: 'assets/parceiros-ZOOM.png', alt: 'Zoom' },
  ];
}
