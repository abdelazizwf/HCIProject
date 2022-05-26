import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../types/Course';
import { Material } from '../../../types/Material';

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
