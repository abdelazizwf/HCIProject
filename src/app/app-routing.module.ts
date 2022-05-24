import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { FacultyRegisterComponent } from './components/faculty-register/faculty-register.component';

const routes: Routes = [
    {
        path: 'studentRegister',
        component: StudentRegisterComponent,
    },
    {
        path: 'facultyRegister',
        component: FacultyRegisterComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
