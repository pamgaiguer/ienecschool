import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HomeCarrossel {
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
export class HomeCarrosselService {
  private apiUrl = 'http://localhost:8000/home/carrossel/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<HomeCarrossel>>(this.apiUrl);
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
