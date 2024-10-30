import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://us-central1-dev-colegioienec.cloudfunctions.net/sendEmail'; // URL da função

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
