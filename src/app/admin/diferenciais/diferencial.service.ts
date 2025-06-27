import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface Diferencial {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

@Injectable({ providedIn: 'root' })
export class DiferencialService {
  private apiUrl = `${environment.apiUrl}/api/diferenciais/`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<Diferencial>>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }

  create(data: FormData) {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number, data: FormData) {
    return this.http.put<any>(`${this.apiUrl}${id}/`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
