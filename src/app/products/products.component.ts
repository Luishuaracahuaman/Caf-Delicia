import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Productos - Café Delicia | Menú de cafés y pastelería');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Explora nuestro menú: espresso, cappuccino, latte, mocha y deliciosa pastelería artesanal. Ingredientes premium y preparación experta.' 
    });
    
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'menú cafetería, precios café, espresso, cappuccino, latte, pastelería, croissant, tarta chocolate, cheesecake' 
    });
    
    this.meta.updateTag({ 
      property: 'og:title', 
      content: 'Productos - Menú de Café Delicia' 
    });
    
    this.meta.updateTag({ 
      property: 'og:description', 
      content: 'Descubre nuestra variedad de cafés especiales y pastelería artesanal' 
    });
    
    this.meta.updateTag({ 
      property: 'og:image', 
      content: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' 
    });
  }
}