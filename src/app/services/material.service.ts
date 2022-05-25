import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../types/Material';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class MaterialService {
  private apiUrl: string = 'http://localhost:5000/materials';

  constructor(private http: HttpClient) {}

  getMaterial(): Observable<Material[]> {
      return this.http.get<Material[]>(this.apiUrl);
  }

  getMaterialByID(id: number): Observable<Material> {
      let url: string = `${this.apiUrl}/${id}`;
      return this.http.get<Material>(url);
  }

  addMaterial(material: Material): Observable<Material> {
      return this.http.post<Material>(this.apiUrl, material, httpOptions);
  }

  updateMaterial(material: Material): Observable<Material> {
      const url: string = `${this.apiUrl}/${material.id}`;
      return this.http.put<Material>(url, material, httpOptions);
  }

  deleteMaterial(material: Material): Observable<Material> {
      const url: string = `${this.apiUrl}/${material.id}`;
      return this.http.delete<Material>(url);
  }
}
