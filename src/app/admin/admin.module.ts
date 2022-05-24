import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfessorCardComponent } from './components/professor-card/professor-card.component';
import { ProfessorViewComponent } from './components/professor-view/professor-view.component';

@NgModule({
    declarations: [ProfessorCardComponent, ProfessorViewComponent],
    imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
