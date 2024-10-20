import { Component, ViewEncapsulation } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ListadoComponent, GaleriaComponent, CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent {
  productos: string[] = ['Hamburguesa', 'Ropa', 'Computadoras'];
  productImages: string[] = [
    'ham.jpg',
    'clothes.jpg',
    'computer.jpg'
  ];
}
