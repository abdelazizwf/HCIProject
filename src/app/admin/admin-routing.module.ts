import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorApprovalsComponent } from './components/professor-approvals/professor-approvals.component';

const routes: Routes = [
    {
        path: '',
        component: ProfessorApprovalsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
