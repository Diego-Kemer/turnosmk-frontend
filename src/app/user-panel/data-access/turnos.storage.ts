import { Injectable, signal } from '@angular/core';
import { Turns } from '../../shared/interfaces/turns';

@Injectable({
  providedIn: 'root',
})
export class TurnosStorage {
  private _turnos = signal<Turns[]>([])
  private _turnosHoy = signal<Turns[]>([])
  private _turnosProximos = signal<Turns[]>([])
  private _turnosManana = signal<Turns[]>([])
  private _listaTurnos = signal<Turns[]>([])

  turnos = this._turnos.asReadonly()
  turnosHoy = this._turnosHoy.asReadonly()
  turnosProximos = this._turnosProximos.asReadonly()
  turnosManana = this._turnosManana.asReadonly()
  listaTurnos = this._listaTurnos.asReadonly()


  setTurnos(turnos: Turns[]){
    this._turnos.set(turnos);
  }

  setTurnosHoy(turnos: Turns[]){
    this._turnosHoy.set(turnos)
  }

  setTurnosProximos(turnos: Turns[]){
    this._turnosProximos.set(turnos)
  }

  setTurnosManana(turnos: Turns[]){
    this._turnosManana.set(turnos)
  }
  setListaTurnos(turnos: Turns[]){
    this._listaTurnos.set(turnos)
  }
  
  clear(){
    this._turnos.set([]);
  }
  
}
