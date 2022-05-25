import { Component, Input, OnInit } from '@angular/core';
import { Material } from '../../../types/Material';
import { Course } from '../../../types/Course';

@Component({
    selector: 'app-material-card',
    templateUrl: './material-card.component.html',
    styleUrls: [],
})
export class MaterialCardComponent implements OnInit {
    @Input() material!: Material;
    @Input() course!: Course;

    constructor() {}

    ngOnInit(): void {}
}
