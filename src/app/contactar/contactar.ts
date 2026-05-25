import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './contactar.html',
  styleUrl: './contactar.css',
})
export class Contactar {
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  };

  enviado = false;

  enviarFormulario() {
    if (this.formData.nombre && this.formData.email && this.formData.mensaje) {
      console.log('Formulario enviado:', this.formData);
      this.enviado = true;
      setTimeout(() => {
        this.enviado = false;
        this.formData = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };
      }, 3000);
    }
  }
}
