import { Component, Input } from '@angular/core';
import { Turns } from '../../../../shared/interfaces/turns';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-turnos-item',
  imports: [DatePipe],
  templateUrl: './turnos-item.html',
  styleUrl: './turnos-item.css',
})
export class TurnosItem {
  @Input() turno!: Turns;

}
