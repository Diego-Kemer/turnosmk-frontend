import { Component, inject, OnInit } from '@angular/core';
import { AddTurno } from "../../ui/buttons/add-turno/add-turno";
import { Turns } from '../../../shared/interfaces/turns';
import { TurnosStorage } from '../../data-access/turnos.storage';
import { RouterOutlet, RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: 'app-turnos',
  imports: [AddTurno, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './turnos.html',
  styleUrl: './turnos.css',
})
export class Turnos implements OnInit{
  private _turnos = inject(TurnosStorage);
  public turnosHoy: Array<Turns> | null = [];
  public turnosProximos: Array<Turns> | null = [];
  public turnosManana: Array<Turns> | null = [];
  
  ngOnInit(): void {
    this._turnos.setListaTurnos(this._turnos.turnosHoy() ?? [])
    this.turnosHoy = this._turnos.turnosHoy();
    this.turnosProximos = this._turnos.turnosProximos();
    this.turnosManana = this._turnos.turnosManana();
  }

  hoy(){
    this._turnos.setListaTurnos(this.turnosHoy ?? [])
  }

  proximos(){
    this._turnos.setListaTurnos(this.turnosProximos ?? [])
  } 

  manana(){
    this._turnos.setListaTurnos(this.turnosManana ?? [])
  }

}
