import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Indumentaria } from '../lista-indumentaria/Indumentaria';

@Component({
  selector: 'app-input-numeros',
  standalone: false,
  templateUrl: './input-numeros.html',
  styleUrl: './input-numeros.scss',
})
export class InputNumeros implements OnInit { 
  constructor() { }
  @Input()
  cantidad!: number; 

  @Input()
  max!: number; 

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

ngOnInit(): void {
  }

  upQuantity(): void{
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } 
  }
  downQuantity(): void{
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    } 
  }
}


