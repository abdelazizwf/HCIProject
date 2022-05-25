import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorViewComponent } from './components/professor-view/professor-view.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { FacultyRegisterComponent } from '../components/faculty-register/faculty-register.component';
import { StudentRegisterComponent } from '../components/student-register/student-register.component';

const routes: Routes = [
    {
        path: 'faculty',
        component: ProfessorViewComponent,
    },
    {
        path: 'facultyUpdate/:id',
        component: FacultyRegisterComponent,
    },
    {
        path: 'students',
        component: StudentViewComponent,
    },
    {
        path: 'studentUpdate/:id',
        component: StudentRegisterComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
