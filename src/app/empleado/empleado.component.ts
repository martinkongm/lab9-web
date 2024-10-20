import { Component } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from '../galeria/galeria.component';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [ListadoComponent, CommonModule,GaleriaComponent],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleados: string[] = ['Martín Kong', 'Daniel Ramírez', 'Freddy Vega'];
  productImages: string[] = [
    'profile.jpg',
    'profile.jpg',
    'profile.jpg'
  ];
}

