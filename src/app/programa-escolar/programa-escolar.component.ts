import { Component } from '@angular/core';

@Component({
  selector: 'app-programa-escolar',
  templateUrl: './programa-escolar.component.html',
  styleUrls: ['./programa-escolar.component.scss'],
})
export class ProgramaEscolarComponent {
  cards = [
    {
      name: 'Registro',
      role: 'Entre em contato para que possamso registrar seu nome e qual o ano letivo de interesse',
    },
    {
      name: 'Venha nos conhecer',
      role: 'Agende uma visita para conhecer mais das nossas instalações, e nossos colaboradores para já saber quem vai cuidar de você!',
    },
    {
      name: 'Faça a sua matrícula',
      role: 'Depois nos te enviaremos todos os formularios e documentação necessária pra finalizar o processo!',
    },
  ];
  faqs = [
    {
      title: 'Registro',
      description:
        'Entre em contato para que possamos registrar seu nome e qual o ano letivo de interesse',
    },
    {
      title: 'Registro',
      description:
        'Entre em contato para que possamos registrar seu nome e qual o ano letivo de interesse',
    },
    {
      title: 'Registro',
      description:
        'Entre em contato para que possamos registrar seu nome e qual o ano letivo de interesse',
    },
    {
      title: 'Registro',
      description:
        'Entre em contato para que possamos registrar seu nome e qual o ano letivo de interesse',
    },
    {
      title: 'Registro',
      description:
        'Entre em contato para que possamos registrar seu nome e qual o ano letivo de interesse',
    },
    {
      title: 'Registro',
      description:
        'Entre em contato para que possamos registrar seu nome e qual o ano letivo de interesse',
    },
  ];
}
