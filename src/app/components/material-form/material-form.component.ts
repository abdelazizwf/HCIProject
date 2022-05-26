import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Material } from '../../types/Material';
import { Course } from '../../types/Course';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../../services/material.service';

@Component({
    selector: 'app-material-form',
    templateUrl: './material-form.component.html',
    styleUrls: [],
})
export class MaterialFormComponent implements OnInit {
    profID: number = 3;
    id: number = 0;
    courseForm!: FormGroup;
    btnText: string = 'Add';
    material!: Material;
    loaded: boolean = false;
    courses!: Course[];

    constructor(
        private formBuilder: FormBuilder,
        private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router,
        private materialService: MaterialService
    ) {}

    ngOnInit(): void {
        this.courseService.getCourses().subscribe((cs) => {
            this.courses = cs;
            if (this.profID > 0) {
                this.courses = this.courses.filter(
                    (c) => c.professorID === this.profID
                );
            }
        });

        this.courseForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(128)]],
            courseID: [0, [Validators.required, Validators.min(1)]],
            description: ['', [Validators.maxLength(521)]],
            link: ['', [Validators.required]],
        });

        if (this.route.snapshot.params['id']) {
            this.id = this.route.snapshot.params['id'];
            this.materialService.getMaterialByID(this.id).subscribe((m) => {
                this.material = m;
                this.setFields();
                this.btnText = 'Update';
                this.loaded = true;
            });
        } else {
            this.loaded = true;
        }
    }

    setFields(): void {
        this.title?.setValue(this.material?.title);
        this.courseID?.setValue(this.material?.courseID);
        this.description?.setValue(this.material?.description);
        this.link?.setValue(this.material?.link);
    }

    get title() {
        return this.courseForm.get('title');
    }

    get courseID() {
        return this.courseForm.get('courseID');
    }

    get description() {
        return this.courseForm.get('description');
    }

    get link() {
        return this.courseForm.get('link');
    }

    onSubmit(): void {
        if (this.courseForm.valid) {
            this.mapFormToMaterial();
            if (this.id === 0) {
                this.materialService
                    .addMaterial(this.material)
                    .subscribe(() => {
                        alert('Material has been added!');
                        this.router.navigate(['/']);
                    });
            } else {
                this.material!.id = this.id;
                this.materialService
                    .updateMaterial(this.material!)
                    .subscribe(() => {
                        alert('Material has been updated!');
                        this.router.navigate(['/']);
                    });
            }
            this.refreshFields();
        } else {
            this.validateFields();
        }
    }

    changeCourseID(e: any) {
        this.courseID?.setValue(e.target.value, {
            onlySelf: true,
        });
    }

    validateFields(): void {
        Object.keys(this.courseForm.controls).forEach((field) => {
            const control = this.courseForm.get(field);
            control?.markAsTouched({ onlySelf: true });
        });
    }

    mapFormToMaterial(): void {
        this.material = {
            courseID: +this.courseID?.value,
            title: this.title?.value,
            link: this.link?.value,
            description: this.description?.value,
        };
    }

    refreshFields(): void {
        Object.keys(this.courseForm.controls).forEach((field) => {
            const control = this.courseForm.get(field);
            control?.reset('');
        });
    }
}
