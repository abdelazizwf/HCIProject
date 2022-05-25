import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../../types/Professor';
import { ProfessorService } from '../../services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-faculty-register',
    templateUrl: './faculty-register.component.html',
    styleUrls: [],
})
export class FacultyRegisterComponent implements OnInit {
    id: number = 0;
    facultyRegisterForm!: FormGroup;
    btnText: string = 'Register';
    prof?: Professor;
    loaded: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private professorService: ProfessorService,
        private route: ActivatedRoute,
        private router: Router
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

        if (this.route.snapshot.params['id']) {
            this.id = this.route.snapshot.params['id'];
            this.professorService.getProfessorByID(this.id).subscribe((p) => {
                this.prof = p;
                this.setFields();
                this.btnText = 'Update';
                this.loaded = true;
            });
        } else {
            this.loaded = true;
        }
    }

    setFields(): void {
        this.name?.setValue(this.prof?.name);
        this.email?.setValue(this.prof?.email);
        this.age?.setValue(this.prof?.age);
        this.phoneNumber?.setValue(this.prof?.phoneNumber);
        this.nationalID?.setValue(this.prof?.nationalID);
        this.faculty?.setValue(this.prof?.faculty);
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
            this.mapFormToProf();
            if (this.id === 0) {
                this.professorService.addProfessor(this.prof!).subscribe(() => {
                    alert(
                        'Your information has been submitted and are pending approval!'
                    );
                    this.router.navigate(['/']);
                });
            } else {
                this.prof!.id = this.id;
                this.professorService
                    .updateProfessor(this.prof!)
                    .subscribe(() => {
                        alert('Information has been updated!');
                        this.router.navigate(['admin', 'faculty']);
                    });
            }
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

    mapFormToProf(): void {
        this.prof = {
            nationalID: this.nationalID?.value,
            name: this.name?.value,
            age: this.age?.value,
            email: this.email?.value,
            faculty: this.faculty?.value,
            phoneNumber: this.phoneNumber?.value,
            approved: this.prof?.approved || false,
        };
    }

    refreshFields(): void {
        Object.keys(this.facultyRegisterForm.controls).forEach((field) => {
            const control = this.facultyRegisterForm.get(field);
            control?.reset('');
        });
    }
}
