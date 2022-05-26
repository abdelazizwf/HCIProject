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
    courses!: Course[]; // filter by assigned course
    profs!: Professor[]; // set to be one prof

    constructor(
        private courseService: CourseService,
        private professorService: ProfessorService
    ) {}

    ngOnInit(): void {
        this.courseService.getCourses().subscribe((c) => (this.courses = c));
        this.professorService
            .getProfessors()
            .subscribe((p) => (this.profs = p));
    }

    getProfByID(id: number): Professor {
        return this.profs.find((value) => value.id === id)!;
    }

    filterCourses(): void {}
}
