import { Component } from '@angular/core';
import { Evento } from './Evento';

@Component({
  selector: 'app-club-eventos',
  standalone: false,
  templateUrl: './club-eventos.html',
  styleUrl: './club-eventos.scss',
})
export class ClubEventos {

  eventos: Evento[] = [
    {
      nombre: 'Baile presentación',
      fecha: '27/03/2026',
      imagen: 'assets/img/presentacion.jpg'
    },
    {
      nombre: 'Encuentro de escuelitas',
      fecha: '16/04/2026',
      imagen: 'assets/img/encuentro_escuelitas.jpg'
    },
    {
      nombre: 'Cena aniversario',
      fecha: '06/06/2026',
      imagen: 'assets/img/aniversario.jpg'
    },
    {
      nombre: 'Baby Fútbol Invierno',
      fecha: '25/07/2026',
      imagen: 'assets/img/baby_futbol.jpg'
    },
    {
      nombre: 'Juego de salón',
      fecha: '16/08/2026',
      imagen: 'assets/img/juego_de_salon.jpg'
    },
    {
      nombre: 'Garmense Corre',
      fecha: '25/10/2026',
      imagen: 'assets/img/garmensecorre.jpg'
    },
  ];

}
