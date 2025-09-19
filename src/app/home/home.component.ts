import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true, // Agregar standalone
  imports: [], // Agregar imports vacío si no necesitas otros componentes
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // Inyectar correctamente los servicios
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Café Delicia - El mejor café artesanal de la ciudad');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Disfruta del mejor café artesanal en Café Delicia. Granos orgánicos, baristas expertos y ambiente acogedor.' 
    });
  }
}