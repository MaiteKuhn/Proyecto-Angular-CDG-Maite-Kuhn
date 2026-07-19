import { Injectable } from '@angular/core';
import { Indumentaria } from './lista-indumentaria/Indumentaria';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoIndumService {
  private _listaDeCompras: Indumentaria[] = [];
   listaDeCompras$ = new BehaviorSubject<Indumentaria[]>([]);

  constructor() {}

  agregarAlCarrito(indum: Indumentaria): void {
    let item = this.listaDeCompras$.value.find((v1) => v1.nombre === indum.nombre);
    if (!item) {
      this._listaDeCompras.push({...indum}); 
    } else {
      item.cantidad += indum.cantidad;
    }
    this.listaDeCompras$.next(this._listaDeCompras);
  }
}
