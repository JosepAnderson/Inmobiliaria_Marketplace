import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Propiedad {
  imagen: string;
  precioSoles: string;
  precioDolares: string;
  direccion: string;
  ubicacion: string;
  area: number;
  resumen: string;
}

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portada.html',
  styleUrl: './portada.css',
})
export class Portada {
  propiedades: Propiedad[] = [
    {
      imagen: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60', // Reemplazar por tus imágenes locales si prefieres
      precioSoles: '385,000',
      precioDolares: '112,000',
      direccion: 'Av Ramon Castilla, San Juan Bautista',
      ubicacion: 'Huamanga, Ayacucho',
      area: 112,
      resumen: 'Resumen: Hermoso departamento con vista a la calle, excelente iluminación natural y acabados de primera...'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=60',
      precioSoles: '420,000',
      precioDolares: '125,000',
      direccion: 'Jr. Los Sauces 452, Huamanga',
      ubicacion: 'Ayacucho, Perú',
      area: 145,
      resumen: 'Resumen: Amplia casa de dos niveles ideal para familias numerosas. Cuenta con patio posterior y...'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60',
      precioSoles: '310,000',
      precioDolares: '92,000',
      direccion: 'Urb. Jardines de Ayacucho II',
      ubicacion: 'Ayacucho',
      area: 92,
      resumen: 'Resumen: Proyecto ecológico con certificación sostenible. Departamentos inteligentes con domótica...'
    }
  ];
}