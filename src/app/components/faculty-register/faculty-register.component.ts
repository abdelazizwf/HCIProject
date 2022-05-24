import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-faculty-register',
    templateUrl: './faculty-register.component.html',
    styleUrls: ['./faculty-register.component.css'],
})
export class FacultyRegisterComponent implements OnInit {
    studentRegisterForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.studentRegisterForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(256)]],
            email: ['', [Validators.required, Validators.email]],
            nationalID:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            age:['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2)]],
            phoneNumber:['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(11)]],
            faculty:['', [Validators.required]],
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
    
    get faculty() {
        return this.studentRegisterForm.get('faculty');
    }

}
