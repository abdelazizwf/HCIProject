import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../types/Course';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    private apiUrl: string = 'http://localhost:5000/courses';

    constructor(private http: HttpClient) {}

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.apiUrl);
    }

    getCourseByID(id: number): Observable<Course> {
        const url: string = `${this.apiUrl}/${id}`;
        return this.http.get<Course>(url);
    }

    addCourse(course: Course): Observable<Course> {
        return this.http.post<Course>(this.apiUrl, course, httpOptions);
    }

    deleteCourse(course: Course): Observable<Course> {
        const url: string = `${this.apiUrl}/${course.id}`;
        return this.http.delete<Course>(url);
    }

    updateCourse(course: Course): Observable<Course> {
        const url: string = `${this.apiUrl}/${course.id}`;
        return this.http.put<Course>(url, course, httpOptions);
    }
}
