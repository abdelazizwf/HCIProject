import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from '../../types/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Professor } from '../../types/Professor';
import { ProfessorService } from '../../services/professor.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: [],
})
export class CourseFormComponent implements OnInit {
    id: number = 0;
    courseForm!: FormGroup;
    btnText: string = 'Add';
    course?: Course;
    loaded: boolean = false;
    profs!: Professor[];
    courses!: Course[];

    constructor(
        private formBuilder: FormBuilder,
        private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router,
        private professorService: ProfessorService
    ) {}

    ngOnInit(): void {
        this.professorService
            .getProfessors()
            .subscribe((ps) => (this.profs = ps));

        this.courseService.getCourses().subscribe((cs) => (this.courses = cs));

        this.courseForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(128)]],
            courseID: ['', [Validators.required, Validators.maxLength(8)]],
            description: ['', [Validators.maxLength(521)]],
            image: [''],
            professor: [0, [Validators.required, Validators.min(1)]],
            creditHours: [
                '',
                [Validators.required, Validators.min(2), Validators.max(5)],
            ],
            prerequisites: [[]],
        });

        if (this.route.snapshot.params['id']) {
            this.id = this.route.snapshot.params['id'];
            this.courseService.getCourseByID(this.id).subscribe((c) => {
                this.course = c;
                this.setFields();
                this.btnText = 'Update';
                this.loaded = true;
            });
        } else {
            this.loaded = true;
        }
    }

    setFields(): void {
        this.name?.setValue(this.course?.name);
        this.courseID?.setValue(this.course?.courseID);
        this.description?.setValue(this.course?.description);
        this.image?.setValue(this.course?.image);
        this.professor?.setValue(this.course?.professorID);
        this.creditHours?.setValue(this.course?.creditHours);
        this.prerequisites?.setValue(this.course?.prerequisites);
    }

    get name() {
        return this.courseForm.get('name');
    }

    get courseID() {
        return this.courseForm.get('courseID');
    }

    get description() {
        return this.courseForm.get('description');
    }

    get image() {
        return this.courseForm.get('image');
    }

    get professor() {
        return this.courseForm.get('professor');
    }

    get creditHours() {
        return this.courseForm.get('creditHours');
    }

    get prerequisites() {
        return this.courseForm.get('prerequisites');
    }

    onSubmit(): void {
        if (this.courseForm.valid) {
            this.mapFormToCourse();
            console.log(this.course);
            if (this.id === 0) {
                this.courseService.addCourse(this.course!).subscribe(() => {
                    alert('Course has been added!');
                    this.router.navigate(['/']);
                });
            } else {
                this.course!.id = this.id;
                this.courseService.updateCourse(this.course!).subscribe(() => {
                    alert('Course has been updated!');
                    this.router.navigate(['/']);
                });
            }
            this.refreshFields();
        } else {
            this.validateFields();
        }
    }

    changeProf(e: any) {
        this.professor?.setValue(e.target.value, {
            onlySelf: true,
        });
    }

    validateFields(): void {
        Object.keys(this.courseForm.controls).forEach((field) => {
            const control = this.courseForm.get(field);
            control?.markAsTouched({ onlySelf: true });
        });
    }

    mapFormToCourse(): void {
        this.course = {
            courseID: this.courseID?.value,
            name: this.name?.value,
            image: this.image?.value,
            description: this.description?.value,
            professorID: +this.professor?.value,
            prerequisites: this.prerequisites?.value,
            creditHours: this.creditHours?.value,
        };
    }

    refreshFields(): void {
        Object.keys(this.courseForm.controls).forEach((field) => {
            const control = this.courseForm.get(field);
            control?.reset('');
        });
    }
}
