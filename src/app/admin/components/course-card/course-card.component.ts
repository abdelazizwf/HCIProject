import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
    @Output() onDeleteCourse: EventEmitter<Course> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onDelete(): void {
        this.onDeleteCourse.emit(this.course);
    }
}
