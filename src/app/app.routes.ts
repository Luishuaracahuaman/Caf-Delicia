import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Cafetería - Inicio' },
  { path: 'nosotros', component: AboutComponent, title: 'Cafetería - Nosotros' },
  { path: 'productos', component: ProductsComponent, title: 'Cafetería - Productos' },
  { path: '**', redirectTo: '' }
];