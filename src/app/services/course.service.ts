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

    addCourse(course: Course): Observable<Course> {
        return this.http.post<Course>(this.apiUrl, course, httpOptions);
    }
}
