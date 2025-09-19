import './polyfills'; // <-- Importar polyfills primero
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err: Error) => console.error(err)); // Tipo explícito para err