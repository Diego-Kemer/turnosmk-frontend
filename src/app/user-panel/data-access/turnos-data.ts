import { inject, Injectable } from '@angular/core';
import { Turns } from '../../shared/interfaces/turns';
import { Client } from '../ui/interfaces/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TurnosStorage } from './turnos.storage';

@Injectable({
  providedIn: 'root',
})
export class TurnosData {
  private http = inject(HttpClient)
  private apiUrl: string = environment.apiUrl

  getTurns(id: string| null):Observable<Turns[]>{
    if(!id) throw new Error('ID de empresa no proporcionado')
    return this.http.get<Turns[]>(`${this.apiUrl}/api/turnos/${id}`)
  }

  
  



public clients: Array<Client> = [
  {
    _id: 'c001',
    nombre: 'Juan Pérez',
    email: 'juandelgualeyan47@gmail.com',
    telefono: '3412345678',
    ultimaVisita: new Date('2026-01-10')
  },
  {
    _id: 'c002',
    nombre: 'María López',
    email: 'marialo34@hotmail.com',
    telefono: '3498765432',
    ultimaVisita: new Date('2026-01-12')
  },
  {
    _id: 'c003',
    nombre: 'Ana García',
    email: 'garciaa34@gmail.com',
    telefono: '3411122233',
    ultimaVisita: new Date('2026-01-08')
  }
];
}
