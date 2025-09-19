import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Sobre Nosotros - Café Delicia | Nuestra historia y valores');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Conoce la historia de Café Delicia. Más de 10 años sirviendo el mejor café artesanal con pasión, sustentabilidad y compromiso con la comunidad.' 
    });
    
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'historia cafetería, sobre nosotros, equipo baristas, valores café, café sustentable' 
    });
    
    this.meta.updateTag({ 
      property: 'og:title', 
      content: 'Sobre Nosotros - Café Delicia' 
    });
    
    this.meta.updateTag({ 
      property: 'og:description', 
      content: 'Descubre nuestra pasión por el café y nuestro compromiso con la calidad' 
    });
    
    this.meta.updateTag({ 
      property: 'og:image', 
      content: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' 
    });
  }
}