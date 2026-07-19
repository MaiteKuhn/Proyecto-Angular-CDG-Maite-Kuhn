import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-club-asociate',
  standalone: false,
  templateUrl: './club-asociate.html',
  styleUrl: './club-asociate.scss',
})
export class ClubAsociate {

  socioForm = new FormGroup({

    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),

    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    telefono: new FormControl('', [
      Validators.required
    ]),

    dni: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{7,8}$')
    ]),

    ciudad: new FormControl('', [
      Validators.required
    ]),

    nacimiento: new FormControl('', [
      Validators.required
    ])

  });

  guardarSocio(){

    console.log(this.socioForm.value);

    alert("¡Solicitud enviada correctamente!");

    this.socioForm.reset();

  }

}
