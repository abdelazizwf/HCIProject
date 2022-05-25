import { Component, OnInit } from '@angular/core';
import { Material } from '../../../types/Material';
import { Course } from '../../../types/Course';
import { CourseService } from '../../../services/course.service';
import { MaterialService } from '../../../services/material.service';

@Component({
    selector: 'app-material-view',
    templateUrl: './material-view.component.html',
    styleUrls: [],
})
export class MaterialViewComponent implements OnInit {
    materials!: Material[];
    courses!: Course[];

    constructor(
        private courseService: CourseService,
        private materialService: MaterialService
    ) {}

    ngOnInit(): void {
        this.courseService.getCourses().subscribe((cs) => (this.courses = cs));
        this.materialService
            .getMaterials()
            .subscribe((ms) => (this.materials = ms));
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
}
