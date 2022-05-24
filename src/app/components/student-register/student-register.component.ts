import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-student-register',
    templateUrl: './student-register.component.html',
    styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
    studentRegisterForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.studentRegisterForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(256)]],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    get name() {
        return this.studentRegisterForm.get('name');
    }

    get email() {
        return this.studentRegisterForm.get('email');
    }
}
