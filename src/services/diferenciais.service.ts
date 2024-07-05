import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiferenciaisService {
  constructor(private http: HttpClient) {}

  getDiferenciais(): Observable<any> {
    return this.http.get('../assets/dados/diferenciais.json');
  }
}
