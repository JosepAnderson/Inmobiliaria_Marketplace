import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publicar',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './publicar.html',
  styleUrl: './publicar.css',
})
export class Publicar {
  // Form data signals
  titulo = signal('');
  descripcion = signal('');
  precioSoles = signal('');
  precioDolares = signal('');
  area = signal('');
  dormitorios = signal('');
  banos = signal('');
  estacionamientos = signal('');
  direccion = signal('');
  nombreAnunciante = signal('Alejandro Mendoza');
  telefonoContacto = signal('987 654 321');
  
  publicado = signal(false);
  guardadoBorrador = signal(false);
  cargando = signal(false);

  // Método para guardar borrador
  guardarBorrador() {
    if (this.validarFormulario()) {
      this.cargando.set(true);
      setTimeout(() => {
        console.log('Borrador guardado:', {
          titulo: this.titulo(),
          descripcion: this.descripcion(),
          precioSoles: this.precioSoles(),
          precioDolares: this.precioDolares(),
          area: this.area(),
          dormitorios: this.dormitorios(),
          banos: this.banos(),
          estacionamientos: this.estacionamientos(),
          direccion: this.direccion(),
          nombreAnunciante: this.nombreAnunciante(),
          telefonoContacto: this.telefonoContacto(),
        });
        this.cargando.set(false);
        this.guardadoBorrador.set(true);
        setTimeout(() => this.guardadoBorrador.set(false), 3000);
      }, 1000);
    }
  }

  // Método para publicar propiedad
  publicarPropiedad() {
    if (this.validarFormulario()) {
      this.cargando.set(true);
      setTimeout(() => {
        console.log('Propiedad publicada:', {
          titulo: this.titulo(),
          descripcion: this.descripcion(),
          precioSoles: this.precioSoles(),
          precioDolares: this.precioDolares(),
          area: this.area(),
          dormitorios: this.dormitorios(),
          banos: this.banos(),
          estacionamientos: this.estacionamientos(),
          direccion: this.direccion(),
          nombreAnunciante: this.nombreAnunciante(),
          telefonoContacto: this.telefonoContacto(),
        });
        this.cargando.set(false);
        this.publicado.set(true);
        
        // Resetear form después de 3 segundos
        setTimeout(() => {
          this.publicado.set(false);
          this.resetearFormulario();
        }, 3000);
      }, 1500);
    }
  }

  // Validación del formulario
  private validarFormulario(): boolean {
    if (!this.titulo() || this.titulo().trim() === '') {
      alert('Por favor ingresa el título de la publicación');
      return false;
    }
    if (!this.descripcion() || this.descripcion().trim() === '') {
      alert('Por favor ingresa una descripción detallada');
      return false;
    }
    if (!this.precioSoles() || this.precioSoles() === '') {
      alert('Por favor ingresa el precio en soles');
      return false;
    }
    if (!this.area() || this.area() === '') {
      alert('Por favor ingresa el área total');
      return false;
    }
    if (!this.direccion() || this.direccion().trim() === '') {
      alert('Por favor ingresa la dirección completa');
      return false;
    }
    if (!this.telefonoContacto() || this.telefonoContacto().trim() === '') {
      alert('Por favor ingresa un teléfono de contacto');
      return false;
    }
    return true;
  }

  // Resetear formulario
  private resetearFormulario() {
    this.titulo.set('');
    this.descripcion.set('');
    this.precioSoles.set('');
    this.precioDolares.set('');
    this.area.set('');
    this.dormitorios.set('');
    this.banos.set('');
    this.estacionamientos.set('');
    this.direccion.set('');
  }
}
