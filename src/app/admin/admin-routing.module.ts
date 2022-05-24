import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorViewComponent } from './components/professor-view/professor-view.component';

const routes: Routes = [
    {
        path: 'faculty',
        component: ProfessorViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
