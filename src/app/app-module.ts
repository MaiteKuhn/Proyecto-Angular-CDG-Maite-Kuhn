import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { App } from './app';
import { ListaIndumentaria } from './lista-indumentaria/lista-indumentaria';
import { CarritoCompras } from './carrito-compras/carrito-compras';
import { CompraIndumentaria } from './compra-indumentaria/compra-indumentaria';
import { ClubHistoria } from './club-historia/club-historia';
import { ClubEventos } from './club-eventos/club-eventos';
import { ClubAsociate } from './club-asociate/club-asociate';
import { InputNumeros } from './input-numeros/input-numeros';

@NgModule({
  declarations: [
    App,
    ListaIndumentaria,
    CarritoCompras,
    CompraIndumentaria,
    ClubHistoria,
    ClubEventos,
    ClubAsociate,
    InputNumeros,
  ],
  imports: [BrowserModule, AppRoutingModule,  CommonModule, ReactiveFormsModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
