import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../types/Professor';
import { ProfessorService } from '../../../services/professor.service';

@Component({
    selector: 'app-professor-approvals',
    templateUrl: './professor-approvals.component.html',
    styleUrls: [],
})
export class ProfessorApprovalsComponent implements OnInit {
    profs!: Professor[];

    constructor(private professorService: ProfessorService) {}

    ngOnInit(): void {
        this.professorService
            .getProfessors()
            .subscribe((ps) => (this.profs = ps.filter((p) => !p.approved)));
    }

    approveProf(prof: Professor): void {
        this.professorService
            .updateProfessor(prof)
            .subscribe(
                () => (this.profs = this.profs.filter((p) => prof.id !== p.id))
            );
    }

    deleteProf(prof: Professor): void {
        this.professorService
            .deleteProfessor(prof)
            .subscribe(
                () => (this.profs = this.profs.filter((p) => prof.id !== p.id))
            );
    }
}
