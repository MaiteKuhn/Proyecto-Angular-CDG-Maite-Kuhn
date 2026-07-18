import { Component, OnInit, Input } from '@angular/core';
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
  indum! : Indumentaria; 
  ngOnInit(): void {
  }

  upQuantity(indum: Indumentaria): void{
    if (indum.cantidad < indum.stock) {
      indum.cantidad++;
    }
  }
  downQuantity(indum: Indumentaria): void{
    if (indum.cantidad > 0) {
      indum.cantidad--;
    } 
  }
}


