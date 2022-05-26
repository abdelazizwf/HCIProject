import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { FacultyRegisterComponent } from './components/faculty-register/faculty-register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
        path: 'studentRegister',
        component: StudentRegisterComponent,
    },
    {
        path: 'facultyRegister',
        component: FacultyRegisterComponent,
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./admin/admin.module').then((m) => m.AdminModule),
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'faculty',
        loadChildren: () =>
            import('./faculty/faculty.module').then((m) => m.FacultyModule),
    },
    {
        path: 'student',
        loadChildren: () =>
            import('./student/student.module').then((m) => m.StudentModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
