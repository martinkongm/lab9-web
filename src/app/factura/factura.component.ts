import { Component } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [ListadoComponent, CommonModule],
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  facturas: string[] = ['Factura 001', 'Factura 002', 'Factura 003', 'Factura 004', 'Factura 005', 'Factura 006', 'Factura 007', 'Factura 008'];
}
