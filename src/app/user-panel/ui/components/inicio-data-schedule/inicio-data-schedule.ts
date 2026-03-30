import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Turns } from '../../../../shared/interfaces/turns';

@Component({
  selector: 'app-inicio-data-schedule',
  imports: [CommonModule],
  templateUrl: './inicio-data-schedule.html',
  styleUrl: './inicio-data-schedule.css',
})
export class InicioDataSchedule {
  @Input() public turno!: Turns;

}
