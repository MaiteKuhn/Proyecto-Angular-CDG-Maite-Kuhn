import { Component, OnInit } from '@angular/core';
import { CarritoIndumService } from '../carrito-indum-service';

@Component({
  selector: 'app-carrito-compras',
  standalone: false,
  templateUrl: './carrito-compras.html',
  styleUrl: './carrito-compras.scss',
})
export class CarritoCompras implements OnInit {

   listaDeCompras$;
   totalCompra: number = 0;

  constructor(private carrito: CarritoIndumService) {
    this.listaDeCompras$ = this.carrito.listaDeCompras$;
    this.listaDeCompras$.subscribe(lista => {
    this.totalCompra = 0;

  for (let item of lista) {
    this.totalCompra += item.valor * item.cantidad;
  }
});
  }

  ngOnInit(): void {}
}





