import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HomeBanner {
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
export class HomeBannerService {
  private apiUrl = 'http://localhost:8000/api/home/banners/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<HomeBanner>>(this.apiUrl);
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
