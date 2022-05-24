import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../../types/Professor';
import { ProfessorService } from '../../services/professor.service';

@Component({
    selector: 'app-faculty-register',
    templateUrl: './faculty-register.component.html',
    styleUrls: ['./faculty-register.component.css'],
})
export class FacultyRegisterComponent implements OnInit {
    facultyRegisterForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private professorService: ProfessorService
    ) {}

    ngOnInit(): void {
        this.facultyRegisterForm = this.formBuilder.group({
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
                    Validators.min(16),
                    Validators.max(99),
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
            faculty: ['', [Validators.required]],
        });
    }

    get name() {
        return this.facultyRegisterForm.get('name');
    }

    get email() {
        return this.facultyRegisterForm.get('email');
    }

    get nationalID() {
        return this.facultyRegisterForm.get('nationalID');
    }

    get age() {
        return this.facultyRegisterForm.get('age');
    }

    get phoneNumber() {
        return this.facultyRegisterForm.get('phoneNumber');
    }

    get faculty() {
        return this.facultyRegisterForm.get('faculty');
    }

    onSubmit(): void {
        if (this.facultyRegisterForm.valid) {
            const prof: Professor = this.mapFormToProf();
            this.professorService.addProfessor(prof).subscribe();
            alert(
                'Your information have been submitted and are pending approval!'
            );
            this.refreshFields();
        } else {
            this.validateFields();
        }
    }

    validateFields(): void {
        Object.keys(this.facultyRegisterForm.controls).forEach((field) => {
            const control = this.facultyRegisterForm.get(field);
            control?.markAsTouched({ onlySelf: true });
        });
    }

    mapFormToProf(): Professor {
        let prof: Professor = {
            nationalID: this.nationalID?.value,
            name: this.name?.value,
            age: this.age?.value,
            email: this.email?.value,
            faculty: this.faculty?.value,
            phoneNumber: this.phoneNumber?.value,
            approved: false,
        };
        return prof;
    }

    refreshFields(): void {
        Object.keys(this.facultyRegisterForm.controls).forEach((field) => {
            const control = this.facultyRegisterForm.get(field);
            control?.reset('');
        });
    }
}
