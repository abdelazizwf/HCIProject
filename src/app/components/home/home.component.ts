import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { ProfessorService } from '../../services/professor.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [],
})
export class HomeComponent implements OnInit {
    Unum: number = 0;
    Cnum: number = 0;
    Mnum: number = 0;

    constructor(
        private ms: MaterialService,
        private cs: CourseService,
        private ss: StudentService,
        private ps: ProfessorService
    ) {}

    ngOnInit(): void {
        this.ms.getMaterials().subscribe((s) => (this.Mnum += s.length));
        this.cs.getCourses().subscribe((c) => (this.Cnum += c.length));
        this.ss.getStudents().subscribe((s) => (this.Unum += s.length));
        this.ps.getProfessors().subscribe((p) => (this.Unum += p.length));
    }
}
