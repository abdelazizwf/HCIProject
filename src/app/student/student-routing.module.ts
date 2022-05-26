import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseViewComponent } from './components/course-view/course-view.component';
import { MaterialViewComponent } from './components/material-view/material-view.component';

const routes: Routes = [
    {
        path: 'courses',
        component: CourseViewComponent,
    },
    {
        path: 'materials',
        component: MaterialViewComponent,
    },
    {
        path: 'materials/:courseID',
        component: MaterialViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentRoutingModule {}
