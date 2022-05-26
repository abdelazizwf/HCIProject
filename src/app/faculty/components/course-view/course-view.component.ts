import { Component, OnInit } from '@angular/core';
import { Course } from '../../../types/Course';
import { Professor } from '../../../types/Professor';
import { CourseService } from '../../../services/course.service';
import { ProfessorService } from '../../../services/professor.service';

@Component({
    selector: 'app-course-view',
    templateUrl: './course-view.component.html',
    styleUrls: [],
})
export class CourseViewComponent implements OnInit {
    id: number = 3;
    courses!: Course[]; // filter by assigned course
    prof!: Professor;

    constructor(
        private courseService: CourseService,
        private professorService: ProfessorService
    ) {}

    ngOnInit(): void {
        this.courseService.getCourses().subscribe((c) => {
            this.courses = c;
            this.professorService.getProfessorByID(this.id).subscribe((p) => {
                this.prof = p;
                this.filterCourses();
            });
        });
    }

    filterCourses(): void {
        this.courses = this.courses.filter(
            (c) => c.professorID === this.prof.id
        );
    }
}
