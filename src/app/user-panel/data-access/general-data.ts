import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralData {
  private http = inject(HttpClient)
  private API_URL: string = environment.apiUrl

  getMe(id:string | null) {
    return this.http.get<any>(`${this.API_URL}/api/empresa/me/${id}`);
  }

  getClientes(id:string): Observable<any>{
    return this.http.get<any>(`${this.API_URL}/api/clientes/${id}`)
  }
}
