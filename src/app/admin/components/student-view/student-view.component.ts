import { Component, OnInit } from '@angular/core';
import { Student } from '../../../types/Student';
import { StudentService } from '../../../services/student.service';

@Component({
    selector: 'app-student-view',
    templateUrl: './student-view.component.html',
    styleUrls: [],
})
export class StudentViewComponent implements OnInit {
    unapprovedStudents!: Student[];
    approvedStudents!: Student[];

    constructor(private studentService: StudentService) {}

    ngOnInit(): void {
        this.studentService
            .getStudents()
            .subscribe(
                (studs) =>
                    (this.unapprovedStudents = studs.filter((s) => !s.approved))
            );
        this.studentService
            .getStudents()
            .subscribe(
                (studs) =>
                    (this.approvedStudents = studs.filter((s) => s.approved))
            );
    }

    approveStudent(student: Student): void {
        this.studentService.updateStudent(student).subscribe();
        this.unapprovedStudents = this.unapprovedStudents.filter(
            (s) => s.id !== student.id
        );
        this.approvedStudents.push(student);
    }

    deleteStudent(student: Student): void {
        this.studentService.deleteStudent(student).subscribe();
        this.unapprovedStudents = this.unapprovedStudents.filter(
            (s) => s.id !== student.id
        );
        this.approvedStudents = this.approvedStudents.filter(
            (s) => s.id !== student.id
        );
    }
}
