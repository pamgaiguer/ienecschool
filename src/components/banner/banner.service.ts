// src/app/services/banner.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface Banner {
  id: number;
  imagem: string;
  ativo: boolean;
  usar_como_carrossel: boolean;
}

interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

@Injectable({ providedIn: 'root' })
export class BannerService {
  private apiUrl = `${environment.apiUrl}/api/home/banners/`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<Banner>>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<Banner>(`${this.apiUrl}${id}/`);
  }

  create(data: FormData) {
    return this.http.post<Banner>(this.apiUrl, data);
  }

  update(id: number, data: FormData) {
    return this.http.put<Banner>(`${this.apiUrl}${id}/`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
