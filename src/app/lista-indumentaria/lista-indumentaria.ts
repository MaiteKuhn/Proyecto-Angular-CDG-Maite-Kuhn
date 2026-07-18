import { Component, OnInit } from '@angular/core';
import { Indumentaria } from './Indumentaria';

@Component({
  selector: 'app-lista-indumentaria',
  standalone: false,
  templateUrl: './lista-indumentaria.html',
  styleUrl: './lista-indumentaria.scss',
})
export class ListaIndumentaria implements OnInit {

  indumentaria: Indumentaria[] = [
    { nombre: 'Camiseta titular 2026', 
      talle: '8-M-XL', 
      valor: 35000,
      imagen: 'assets/img/titular.jpg',
      stock: 10,
      oferta: false,
    },

    { nombre: 'Camiseta reserva 2026', 
      talle: 'S-L-XL-2XL', 
      valor: 30000,
      imagen: 'assets/img/reserva.jpg',
      stock: 4,
      oferta: false,
    },

    { nombre: 'Rompevientos', 
      talle: '16-S-M-L', 
      valor: 50000, 
      imagen: 'assets/img/rompeviento.jpg', 
      stock: 0,
      oferta: false, },
    
      { nombre: 'Conjunto entrenamiento', 
        talle: 'M-XL', 
        valor: 40000, 
        imagen: 'assets/img/conjuntoEntrenamiento.jpg', 
        stock: 2, 
        oferta: true,
    },
    
      { nombre: 'Conjunto viajes', 
        talle: '12-14-16-M-2XL', 
        valor: 60000, 
        imagen: 'assets/img/conjuntoViaje.jpg', 
        stock: 2, 
        oferta: false,
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
