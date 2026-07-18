import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import {CompraIndumentaria} from './compra-indumentaria/compra-indumentaria';
import { ClubHistoria } from './club-historia/club-historia';
import { ClubAsociate } from './club-asociate/club-asociate';
import { ClubEventos } from './club-eventos/club-eventos';



const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: Home
  },
  {
    path: 'compra', 
    component: CompraIndumentaria
  },
  {
    path: 'historia', 
    component: ClubHistoria
  },
  {
    path: 'asociate', 
    component: ClubAsociate
  },
  {
    path: 'eventos', 
    component: ClubEventos
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
