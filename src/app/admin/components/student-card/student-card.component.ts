import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../../types/Student';

@Component({
    selector: 'app-student-card',
    templateUrl: './student-card.component.html',
    styleUrls: [],
})
export class StudentCardComponent implements OnInit {
    @Input() student!: Student;
    @Input() showApprove!: boolean;
    @Output() onApproveProf: EventEmitter<Student> = new EventEmitter();
    @Output() onDeleteProf: EventEmitter<Student> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onApprove(): void {
        this.student.approved = true;
        this.onApproveProf.emit(this.student);
    }

    onDelete(): void {
        this.onDeleteProf.emit(this.student);
    }
}
