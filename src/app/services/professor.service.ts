import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../types/Professor';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class ProfessorService {
    private apiUrl: string = 'http://localhost:5000/professors';

    constructor(private http: HttpClient) {}

    getProfessors(): Observable<Professor[]> {
        return this.http.get<Professor[]>(this.apiUrl);
    }

    getProfessorByID(id: number): Observable<Professor> {
        let url: string = `${this.apiUrl}/${id}`;
        return this.http.get<Professor>(url);
    }

    addProfessor(prof: Professor): Observable<Professor> {
        return this.http.post<Professor>(this.apiUrl, prof, httpOptions);
    }

    updateProfessor(prof: Professor): Observable<Professor> {
        const url: string = `${this.apiUrl}/${prof.id}`;
        return this.http.put<Professor>(url, prof, httpOptions);
    }

    deleteProfessor(prof: Professor): Observable<Professor> {
        const url: string = `${this.apiUrl}/${prof.id}`;
        return this.http.delete<Professor>(url);
    }
}
