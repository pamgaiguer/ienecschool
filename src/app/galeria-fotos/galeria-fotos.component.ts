import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.scss'],
})
export class GaleriaFotosComponent implements OnInit {
  galeriaFotos: any[] = [];
  isModalOpen = false;
  modalImageSrc: string | undefined;

  constructor(private dataService: DataService) {}

  openModal(imageSrc: string) {
    this.modalImageSrc = imageSrc;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit(): void {
    this.dataService.getGaleriaFotos().subscribe(data => {
      this.galeriaFotos = data;
    });
  }
}
