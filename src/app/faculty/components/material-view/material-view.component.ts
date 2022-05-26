import { Component, OnInit } from '@angular/core';
import { Material } from '../../../types/Material';
import { Course } from '../../../types/Course';
import { CourseService } from '../../../services/course.service';
import { MaterialService } from '../../../services/material.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-material-view',
    templateUrl: './material-view.component.html',
    styleUrls: [],
})
export class MaterialViewComponent implements OnInit {
    materials!: Material[]; // filter by courses
    courses!: Course[]; // filter by assigned courses

    constructor(
        private courseService: CourseService,
        private materialService: MaterialService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.courseService.getCourses().subscribe((cs) => (this.courses = cs));
        this.materialService.getMaterials().subscribe((ms) => {
            if (this.route.snapshot.params['courseID']) {
                let courseID = this.route.snapshot.params['courseID'];
                this.materials = ms.filter((m) => m.courseID === +courseID);
            } else {
                this.materials = ms;
            }
        });
    }

    getCourse(id: number): Course {
        let c!: Course;
        this.courses.forEach((cs) => {
            if (cs.id === id) {
                c = cs;
            }
        });
        return c;
    }

    deleteMat(mat: Material) {
        this.materialService
            .deleteMaterial(mat)
            .subscribe(
                () =>
                    (this.materials = this.materials.filter(
                        (m) => m.id !== mat.id
                    ))
            );
    }

    filterCourses(): void {}
}
