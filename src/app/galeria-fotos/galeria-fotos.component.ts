import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.scss'],
})
export class GaleriaFotosComponent {
  photos = [
    {
      name: 'Registro',
    },
    {
      name: 'Venha nos conhecer',
    },
    {
      name: 'Faça a sua matrícula',
    },
    {
      name: 'Registro',
    },
    {
      name: 'Venha nos conhecer',
    },
    {
      name: 'Faça a sua matrícula',
    },
    {
      name: 'Registro',
    },
    {
      name: 'Venha nos conhecer',
    },
    {
      name: 'Faça a sua matrícula',
    },
  ];
}
