import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Importar los componentes
import { AppComponent } from './app.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductoComponent } from './producto/producto.component';
import { FacturaComponent } from './factura/factura.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';

// Importar las rutas desde app.route.ts
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent,
    ProductoComponent,
    FacturaComponent,
    ClienteComponent,
    EmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configurar el módulo de enrutamiento
  ],
  providers: [],
  bootstrap: [AppComponent] // Indicar que el punto de entrada es AppComponent
})
export class AppModule { }
