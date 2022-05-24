import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/types/Student';
import { StudentService } from '../../services/student.service';

@Component({
    selector: 'app-student-register',
    templateUrl: './student-register.component.html',
    styleUrls: [],
})
export class StudentRegisterComponent implements OnInit {
    studentRegisterForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private studentService: StudentService
    ) {}

    ngOnInit(): void {
        this.studentRegisterForm = this.formBuilder.group({
            name: [
                '',
                [
                    Validators.required,
                    Validators.maxLength(256),
                    Validators.minLength(9),
                ],
            ],
            email: ['', [Validators.required, Validators.email]],
            nationalID: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^[0-9]*$'),
                    Validators.maxLength(14),
                    Validators.minLength(14),
                ],
            ],
            age: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^[0-9]*$'),
                    Validators.max(99),
                    Validators.min(16),
                ],
            ],
            phoneNumber: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^[0-9]*$'),
                    Validators.maxLength(11),
                    Validators.minLength(11),
                ],
            ],
            level: [
                '',
                [Validators.required, Validators.min(1), Validators.max(4)],
            ],
        });
    }

    get name() {
        return this.studentRegisterForm.get('name');
    }

    get email() {
        return this.studentRegisterForm.get('email');
    }

    get nationalID() {
        return this.studentRegisterForm.get('nationalID');
    }

    get age() {
        return this.studentRegisterForm.get('age');
    }

    get phoneNumber() {
        return this.studentRegisterForm.get('phoneNumber');
    }

    get level() {
        return this.studentRegisterForm.get('level');
    }

    onSubmit(): void {
        if (this.studentRegisterForm.valid) {
            const student: Student = this.mapFormToStudent();
            this.studentService.addStudent(student).subscribe();
            alert(
                'Your information have been submitted and are pending approval!'
            );
            this.refreshFields();
        } else {
            this.validateFields();
        }
    }

    validateFields(): void {
        Object.keys(this.studentRegisterForm.controls).forEach((field) => {
            const control = this.studentRegisterForm.get(field);
            control?.markAsTouched({ onlySelf: true });
        });
    }

    mapFormToStudent(): Student {
        let prof: Student = {
            nationalID: this.nationalID?.value,
            name: this.name?.value,
            age: this.age?.value,
            email: this.email?.value,
            level: this.level?.value,
            phoneNumber: this.phoneNumber?.value,
            approved: false,
        };
        return prof;
    }

    refreshFields(): void {
        Object.keys(this.studentRegisterForm.controls).forEach((field) => {
            const control = this.studentRegisterForm.get(field);
            control?.reset('');
        });
    }
}
