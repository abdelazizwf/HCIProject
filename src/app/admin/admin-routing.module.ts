import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorViewComponent } from './components/professor-view/professor-view.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { FacultyRegisterComponent } from '../components/faculty-register/faculty-register.component';
import { StudentRegisterComponent } from '../components/student-register/student-register.component';
import { CourseViewComponent } from './components/course-view/course-view.component';
import { CourseFormComponent } from '../components/course-form/course-form.component';
import { MaterialViewComponent } from './components/material-view/material-view.component';
import { MaterialFormComponent } from '../components/material-form/material-form.component';

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
    {
        path: 'courses',
        component: CourseViewComponent,
    },
    {
        path: 'addCourse',
        component: CourseFormComponent,
    },
    {
        path: 'courseUpdate/:id',
        component: CourseFormComponent,
    },
    {
        path: 'materials',
        component: MaterialViewComponent,
    },
    {
        path: 'addMaterial',
        component: MaterialFormComponent,
    },
    {
        path: 'materialUpdate/:id',
        component: MaterialFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
