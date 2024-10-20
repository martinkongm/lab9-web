import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  @Input() title: string = '';  // Título dinámico para la sección (Facturas, Clientes, etc.)
  @Input() items: string[] = [];  // Lista dinámica de items (Facturas, Clientes, Empleados)
}
