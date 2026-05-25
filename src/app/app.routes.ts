import { Routes } from '@angular/router';
import { Portada } from './portada/portada';
import { Login } from './login/login';
import { Publicar } from './publicar/publicar';
import { Detalle } from './detalle/detalle';
import { Terminos } from './terminos/terminos';
import { Reclamaciones } from './reclamaciones/reclamaciones';
import { Contactar } from './contactar/contactar';

export const routes: Routes = [
  { path: '', component: Portada },
  { path: 'login', component: Login },
  { path: 'publicar', component: Publicar },
  { path: 'detalle', component: Detalle },
  { path: 'terminos', component: Terminos },
  { path: 'reclamaciones', component: Reclamaciones },
  { path: 'contactar', component: Contactar },
  { path: '**', redirectTo: '' }
];
