import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl: String = 'http://localhost:8081/';

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    // return kar dega observal api ka
    return this.http.post(`${this.baseUrl}/sendmail`, data);
  }
}
