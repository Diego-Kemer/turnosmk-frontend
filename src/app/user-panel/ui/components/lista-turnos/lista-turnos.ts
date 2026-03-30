import { Component, inject, OnInit } from '@angular/core';
import { TurnosStorage } from '../../../data-access/turnos.storage';
import { Turns } from '../../../../shared/interfaces/turns';
import { TurnosItem } from "../turnos-item/turnos-item";

@Component({
  selector: 'app-lista-turnos',
  imports: [TurnosItem],
  templateUrl: './lista-turnos.html',
  styleUrl: './lista-turnos.css',
})
export class ListaTurnos implements OnInit{
  private _turnos = inject(TurnosStorage);
  public listTurnos: Array<Turns> | null = [];
  
  
  ngOnInit(): void {
    this.listTurnos = this._turnos.listaTurnos();
  }


}
