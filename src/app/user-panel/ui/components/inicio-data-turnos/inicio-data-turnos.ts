import { Component, Input } from '@angular/core';
import { DataTurnos } from '../../interfaces/data-turnos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inicio-data-turnos',
  imports: [CommonModule],
  templateUrl: './inicio-data-turnos.html',
  styleUrl: './inicio-data-turnos.css',
})
export class InicioDataTurnos {
  @Input() public turnosData!: DataTurnos;

}
