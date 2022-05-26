import { Component, OnInit } from '@angular/core';
import { Material } from '../../../types/Material';
import { Course } from '../../../types/Course';
import { CourseService } from '../../../services/course.service';
import { MaterialService } from '../../../services/material.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../../types/Student';
import { StudentService } from '../../../services/student.service';

@Component({
    selector: 'app-material-view',
    templateUrl: './material-view.component.html',
    styleUrls: [],
})
export class MaterialViewComponent implements OnInit {
    id: number = 11;
    materials!: Material[]; // filter by courses
    courses!: Course[]; // filter by enrolled courses
    student!: Student;

    constructor(
        private courseService: CourseService,
        private materialService: MaterialService,
        private studentService: StudentService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.courseService.getCourses().subscribe((cs) => {
            this.courses = cs;
            this.studentService.getStudentByID(this.id).subscribe((s) => {
                this.student = s;
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

    filterMaterials(): void {
        this.materials = this.materials.filter((m) =>
            this.student.registeredCourses?.includes(m.courseID)
        );
    }
}
