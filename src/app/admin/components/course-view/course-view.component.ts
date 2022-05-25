import { Component, OnInit } from '@angular/core';
import { Course } from '../../../types/Course';
import { CourseService } from '../../../services/course.service';
import { Professor } from '../../../types/Professor';
import { ProfessorService } from '../../../services/professor.service';

@Component({
    selector: 'app-course-view',
    templateUrl: './course-view.component.html',
    styleUrls: [],
})
export class CourseViewComponent implements OnInit {
    courses!: Course[];
    profs!: Professor[];

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

    deleteCourse(c: Course): void {
        this.courseService
            .deleteCourse(c)
            .subscribe(
                () =>
                    (this.courses = this.courses.filter((co) => co.id !== c.id))
            );
    }

    getProfByID(id: number): Professor {
        return this.profs.find((value) => value.id === id)!;
    }
}
