import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../types/Course';
import { Professor } from '../../../types/Professor';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: [],
})
export class CourseCardComponent implements OnInit {
    @Input() course!: Course;
    @Input() prof!: Professor;

    constructor() {}

    ngOnInit(): void {}
}
