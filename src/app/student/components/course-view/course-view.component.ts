import { Component, OnInit } from '@angular/core';
import { Course } from '../../../types/Course';
import { Professor } from '../../../types/Professor';
import { CourseService } from '../../../services/course.service';
import { ProfessorService } from '../../../services/professor.service';
import { Student } from '../../../types/Student';
import { StudentService } from '../../../services/student.service';

@Component({
    selector: 'app-course-view',
    templateUrl: './course-view.component.html',
    styleUrls: [],
})
export class CourseViewComponent implements OnInit {
    id: number = 11;
    courses!: Course[]; // filter by assigned course
    profs!: Professor[];
    student!: Student;

    constructor(
        private courseService: CourseService,
        private professorService: ProfessorService,
        private studentService: StudentService
    ) {}

    ngOnInit(): void {
        this.studentService.getStudentByID(this.id).subscribe((s) => {
            this.student = s;
            this.courseService.getCourses().subscribe((c) => {
                this.courses = c;
                this.filterCourses();
            });
        });
        this.professorService
            .getProfessors()
            .subscribe((p) => (this.profs = p));
    }

    getProfByID(id: number): Professor {
        return this.profs.find((value) => value.id === id)!;
    }

    filterCourses(): void {
        this.courses = this.courses.filter((c) =>
            this.student.registeredCourses?.includes(c.id!)
        );
    }
}
