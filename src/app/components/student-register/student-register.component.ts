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
            nationalID:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            age:['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2)]],
            phoneNumber:['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(11)]],
            level:['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(1)]],
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

}
