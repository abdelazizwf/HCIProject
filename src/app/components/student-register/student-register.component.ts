import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/types/Student';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-student-register',
    templateUrl: './student-register.component.html',
    styleUrls: [],
})
export class StudentRegisterComponent implements OnInit {
    studentRegisterForm!: FormGroup;
    id: number = 0;
    btnText: string = 'Register';
    student?: Student;
    loaded: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private studentService: StudentService,
        private route: ActivatedRoute,
        private router: Router
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

        if (this.route.snapshot.params['id']) {
            this.id = this.route.snapshot.params['id'];
            this.studentService.getStudentByID(this.id).subscribe((s) => {
                this.student = s;
                this.setFields();
                this.btnText = 'Update';
                this.loaded = true;
            });
        } else {
            this.loaded = true;
        }
    }

    setFields(): void {
        this.name?.setValue(this.student?.name);
        this.email?.setValue(this.student?.email);
        this.age?.setValue(this.student?.age);
        this.phoneNumber?.setValue(this.student?.phoneNumber);
        this.nationalID?.setValue(this.student?.nationalID);
        this.level?.setValue(this.student?.level);
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
            this.mapFormToStudent();
            if (this.id === 0) {
                this.studentService.addStudent(this.student!).subscribe(() => {
                    alert(
                        'Your information have been submitted and is pending approval!'
                    );
                    this.router.navigate(['/']);
                });
            } else {
                this.student!.id = this.id;
                this.studentService
                    .updateStudent(this.student!)
                    .subscribe(() => {
                        alert('Information has been updated!');
                        this.router.navigate(['admin', 'students']);
                    });
            }

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

    mapFormToStudent(): void {
        this.student = {
            nationalID: this.nationalID?.value,
            name: this.name?.value,
            age: this.age?.value,
            email: this.email?.value,
            level: this.level?.value,
            phoneNumber: this.phoneNumber?.value,
            approved: this.student?.approved || false,
        };
    }

    refreshFields(): void {
        Object.keys(this.studentRegisterForm.controls).forEach((field) => {
            const control = this.studentRegisterForm.get(field);
            control?.reset('');
        });
    }
}
