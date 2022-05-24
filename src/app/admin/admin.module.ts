import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfessorCardComponent } from './components/professor-card/professor-card.component';
import { ProfessorApprovalsComponent } from './components/professor-approvals/professor-approvals.component';

@NgModule({
    declarations: [ProfessorCardComponent, ProfessorApprovalsComponent],
    imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
