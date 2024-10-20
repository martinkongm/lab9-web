import { Component } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [ListadoComponent, CommonModule],
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
  proveedores: string[] = ['Burger King', 'H&M', 'Hewlett Packard'];
}
