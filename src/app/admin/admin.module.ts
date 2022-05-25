import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfessorCardComponent } from './components/professor-card/professor-card.component';
import { ProfessorViewComponent } from './components/professor-view/professor-view.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { StudentViewComponent } from './components/student-view/student-view.component';

@NgModule({
    declarations: [ProfessorCardComponent, ProfessorViewComponent, StudentCardComponent, StudentViewComponent],
    imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
