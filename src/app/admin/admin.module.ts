import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfessorCardComponent } from './components/professor-card/professor-card.component';
import { ProfessorViewComponent } from './components/professor-view/professor-view.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { CourseViewComponent } from './components/course-view/course-view.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { MaterialViewComponent } from './components/material-view/material-view.component';
import { MaterialCardComponent } from './components/material-card/material-card.component';

@NgModule({
    declarations: [
        ProfessorCardComponent,
        ProfessorViewComponent,
        StudentCardComponent,
        StudentViewComponent,
        CourseViewComponent,
        CourseCardComponent,
        MaterialViewComponent,
        MaterialCardComponent,
    ],
    imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
