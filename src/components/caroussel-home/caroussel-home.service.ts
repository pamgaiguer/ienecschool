// src/app/services/carrossel.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface CarrosselItem {
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
export class CarrosselService {
  private apiUrl = `${environment.apiUrl}/api/home/carrossel/`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<CarrosselItem>>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<CarrosselItem>(`${this.apiUrl}${id}/`);
  }

  create(data: FormData) {
    return this.http.post<CarrosselItem>(this.apiUrl, data);
  }

  update(id: number, data: FormData) {
    return this.http.put<CarrosselItem>(`${this.apiUrl}${id}/`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
