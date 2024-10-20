import { Routes } from '@angular/router';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductoComponent } from './producto/producto.component';
import { FacturaComponent } from './factura/factura.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';

export const routes: Routes = [
  { path: 'proveedor', component: ProveedorComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'empleado', component: EmpleadoComponent },

];
