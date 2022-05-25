import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Professor } from '../../../types/Professor';

@Component({
    selector: 'app-professor-card',
    templateUrl: './professor-card.component.html',
    styleUrls: [],
})
export class ProfessorCardComponent implements OnInit {
    @Input() prof!: Professor;
    @Input() showApprove!: boolean;
    @Output() onApproveProf: EventEmitter<Professor> = new EventEmitter();
    @Output() onDeleteProf: EventEmitter<Professor> = new EventEmitter();
    @Output() onUpdateProf: EventEmitter<Professor> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onApprove(): void {
        this.prof.approved = true;
        this.onApproveProf.emit(this.prof);
    }

    onDelete(): void {
        this.onDeleteProf.emit(this.prof);
    }
}
