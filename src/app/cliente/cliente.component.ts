import { Component, ViewEncapsulation } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [ListadoComponent, CommonModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ClienteComponent {
  clientes: string[] = ['Ruperto', 'Anacleto', 'Nicolás Maduro', 'Rufus Rafus', 'Bazinga', 'Lula da Silva', 'César Acuña', 'Alan García', 'Elon Musk', 'Javier Milei', 'Hincha israelita', 'El tío cuyito'];
}
