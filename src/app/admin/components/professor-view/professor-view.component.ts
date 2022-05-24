import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../types/Professor';
import { ProfessorService } from '../../../services/professor.service';

@Component({
    selector: 'app-professor-view',
    templateUrl: './professor-view.component.html',
    styleUrls: [],
})
export class ProfessorViewComponent implements OnInit {
    unapprovedProfs!: Professor[];
    approvedProfs!: Professor[];

    constructor(private professorService: ProfessorService) {}

    ngOnInit(): void {
        this.professorService
            .getProfessors()
            .subscribe(
                (ps) => (this.unapprovedProfs = ps.filter((p) => !p.approved))
            );
        this.professorService
            .getProfessors()
            .subscribe(
                (ps) => (this.approvedProfs = ps.filter((p) => p.approved))
            );
    }

    approveProf(prof: Professor): void {
        this.professorService.updateProfessor(prof).subscribe();
        this.unapprovedProfs = this.unapprovedProfs.filter(
            (p) => p.id !== prof.id
        );
        this.approvedProfs.push(prof);
    }

    deleteProf(prof: Professor): void {
        this.professorService.deleteProfessor(prof).subscribe();
        this.unapprovedProfs = this.unapprovedProfs.filter(
            (p) => p.id !== prof.id
        );
        this.approvedProfs = this.approvedProfs.filter((p) => p.id !== prof.id);
    }
}
