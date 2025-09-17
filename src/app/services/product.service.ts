import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://smallecommerece-fedmepdab6ghamd8.canadacentral-01.azurewebsites.net/api/product';

  constructor(private http: HttpClient) {}

    private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  getProducts(): Observable<any[]> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}


