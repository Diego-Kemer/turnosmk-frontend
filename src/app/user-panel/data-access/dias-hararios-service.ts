import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DiasHarariosService {
  private http = inject(HttpClient);
  private url = environment.apiUrl

  actualizarDias(id: string | undefined, data: any): Observable<any>{
    return this.http.put<any>(`${this.url}/api/dias-horarios/diasHabiles/${id}`, data)
  }

  addRango(id: string | undefined, data: any): Observable<any>{
    return this.http.post<any>(`${this.url}/api/dias-horarios/rangoNew/${id}`, data)
  }

  deleteRango(_id: string | undefined, dia: any, id: string): Observable<any>{
    return this.http.delete<any>(`${this.url}/api/dias-horarios/deleteRango/${_id}/${dia}/${id}`)
  }
  
}
