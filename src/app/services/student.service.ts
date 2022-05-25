import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../types/Student';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    private apiUrl: string = 'http://localhost:5000/students';

    constructor(private http: HttpClient) {}

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl);
    }

    getStudentByID(id: number): Observable<Student> {
        let url: string = `${this.apiUrl}/${id}`;
        return this.http.get<Student>(url);
    }

    addStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(this.apiUrl, student, httpOptions);
    }

    updateStudent(student: Student): Observable<Student> {
        const url: string = `${this.apiUrl}/${student.id}`;
        return this.http.put<Student>(url, student, httpOptions);
    }

    deleteStudent(student: Student): Observable<Student> {
        const url: string = `${this.apiUrl}/${student.id}`;
        return this.http.delete<Student>(url);
    }
}
