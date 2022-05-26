import { Component, OnInit, Input } from '@angular/core';
import { Professor } from '../../../types/Professor';
import { Course } from '../../../types/Course';

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
