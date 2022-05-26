import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
    @Output() onDeleteMat: EventEmitter<Material> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onDelete() {
        this.onDeleteMat.emit(this.material);
    }
}
