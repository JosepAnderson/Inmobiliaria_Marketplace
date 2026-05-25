import { Component, signal } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = signal('');
  password = signal('');
  recordarme = signal(false);
  mostrarPassword = signal(false);
  cargando = signal(false);
  error = signal('');

  constructor(private router: Router) {}

  alternarVisibilidadPassword() {
    this.mostrarPassword.set(!this.mostrarPassword());
  }

  ingresar() {
    // Validar campos
    if (!this.email() || !this.password()) {
      this.error.set('Por favor completa todos los campos');
      setTimeout(() => this.error.set(''), 3000);
      return;
    }

    // Validar email
    if (!this.validarEmail(this.email())) {
      this.error.set('Por favor ingresa un correo válido');
      setTimeout(() => this.error.set(''), 3000);
      return;
    }

    this.cargando.set(true);
    
    // Simular llamada a servidor
    setTimeout(() => {
      console.log('Login exitoso:', {
        email: this.email(),
        recordarme: this.recordarme()
      });
      
      // Guardar datos de sesión si lo desea
      if (this.recordarme()) {
        localStorage.setItem('userEmail', this.email());
      }
      
      this.cargando.set(false);
      // Redirigir a portada o dashboard
      this.router.navigate(['/']);
    }, 1500);
  }

  private validarEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }
}
