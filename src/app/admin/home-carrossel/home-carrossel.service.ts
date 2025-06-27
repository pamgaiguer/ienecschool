import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface HomeCarrosel {
  id: number;
  imagem: string;
  ativo: boolean;
  ordem: number;
}

interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

@Injectable({ providedIn: 'root' })
export class HomeCarroselService {
  private apiUrl = `${environment.apiUrl}/api/home/carrossel/`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<HomeCarrosel>>(this.apiUrl);
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
