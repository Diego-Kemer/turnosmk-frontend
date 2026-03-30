import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient)
  private api: string = environment.apiUrl

  login(data: {email: string, password: string}): Observable<any> {
    return this.http.post<{ token: string }>(`${this.api}/api/auth/login`, data)
  }

  register(data: {email: string, password: string, businessName: string}): Observable<any> {
    return this.http.post<any>(`${this.api}/api/auth/register`, data)
  }

}
