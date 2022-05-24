import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PendingApprovalsComponent } from './components/pending-approvals/pending-approvals.component';


@NgModule({
  declarations: [
    PendingApprovalsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
