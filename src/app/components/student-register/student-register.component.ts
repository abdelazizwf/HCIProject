import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-student-register',
    templateUrl: './student-register.component.html',
    styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
    studentRegisterForm!: FormGroup;
    levels: number[] = [1, 2, 3, 4];

    constructor(private formBuilder: FormBuilder) {}

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

    changeLevel(e: any) {
        this.level?.setValue(e.target.value, {
            onlySelf: true,
        });
    }
}
