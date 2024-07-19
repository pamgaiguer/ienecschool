import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDiferenciais(): Observable<any> {
    return this.http.get('../assets/dados/diferenciais.json');
  }

  getSegmentosEnsino(): Observable<any> {
    return this.http.get('../assets/dados/segmentos_ensino.json');
  }
}
