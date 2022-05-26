import { Component, OnInit } from '@angular/core';
import { Material } from '../../../types/Material';
import { Course } from '../../../types/Course';
import { CourseService } from '../../../services/course.service';
import { MaterialService } from '../../../services/material.service';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../../../types/Professor';
import { ProfessorService } from '../../../services/professor.service';

@Component({
    selector: 'app-material-view',
    templateUrl: './material-view.component.html',
    styleUrls: [],
})
export class MaterialViewComponent implements OnInit {
    id: number = 3;
    materials!: Material[]; // filter by courses
    courses!: Course[]; // filter by assigned courses
    prof!: Professor;

    constructor(
        private courseService: CourseService,
        private materialService: MaterialService,
        private professorService: ProfessorService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.courseService.getCourses().subscribe((cs) => {
            this.courses = cs;
            this.professorService.getProfessorByID(this.id).subscribe((p) => {
                this.prof = p;
                this.materialService.getMaterials().subscribe((ms) => {
                    if (this.route.snapshot.params['courseID']) {
                        let courseID = this.route.snapshot.params['courseID'];
                        this.materials = ms.filter(
                            (m) => m.courseID === +courseID
                        );
                    } else {
                        this.materials = ms;
                        this.filterMaterials();
                    }
                });
            });
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

    filterMaterials(): void {
        this.courses = this.courses.filter(
            (c) => c.professorID === this.prof.id
        );
        let courseIDs: number[] = [];
        this.courses.forEach((c) => courseIDs.push(c.id!));
        this.materials = this.materials.filter((m) =>
            courseIDs.includes(m.courseID)
        );
    }
}
