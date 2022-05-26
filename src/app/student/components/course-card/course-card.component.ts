import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    @Input() enroll: boolean = false;
    @Output() onEnrollCourse: EventEmitter<Course> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onEnroll(): void {
        this.onEnrollCourse.emit(this.course);
    }
}
