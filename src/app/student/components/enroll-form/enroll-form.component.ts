import { Component, OnInit } from '@angular/core';
import { Course } from '../../../types/Course';
import { Student } from '../../../types/Student';
import { CourseService } from '../../../services/course.service';
import { StudentService } from '../../../services/student.service';
import { ProfessorService } from '../../../services/professor.service';
import { Professor } from '../../../types/Professor';

@Component({
    selector: 'app-enroll-form',
    templateUrl: './enroll-form.component.html',
    styleUrls: [],
})
export class EnrollFormComponent implements OnInit {
    studentID: number = 8;
    student!: Student;
    courses!: Course[];
    profs!: Professor[];

    constructor(
        private courseService: CourseService,
        private studentService: StudentService,
        private professorService: ProfessorService
    ) {}

    ngOnInit(): void {
        this.studentService.getStudentByID(this.studentID).subscribe((s) => {
            this.student = s;
            this.courseService.getCourses().subscribe((cs) => {
                this.courses = cs;
                this.filterCourses();
            });
        });

        this.professorService
            .getProfessors()
            .subscribe((p) => (this.profs = p));
    }

    filterCourses(): void {
        this.courses = this.courses.filter(
            (c) =>
                !this.student.completedCourses?.includes(c.id!) &&
                !this.student.registeredCourses?.includes(c.id!)
        );

        this.courses = this.courses.filter((c) => {
            let num: number = 0;
            c.prerequisites!.forEach((p) => {
                if (this.student.completedCourses?.includes(p)) {
                    num++;
                }
            });
            return num === c.prerequisites!.length;
        });
    }

    getProfByID(id: number): Professor {
        return this.profs.find((value) => value.id === id)!;
    }

    enrollCourse(course: Course): void {
        this.student.registeredCourses?.push(course.id!);
        this.studentService.updateStudent(this.student).subscribe();
    }
}
