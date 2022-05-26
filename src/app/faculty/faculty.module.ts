import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { CourseViewComponent } from './components/course-view/course-view.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { MaterialCardComponent } from './components/material-card/material-card.component';
import { MaterialViewComponent } from './components/material-view/material-view.component';


@NgModule({
  declarations: [
    CourseViewComponent,
    CourseCardComponent,
    MaterialCardComponent,
    MaterialViewComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule
  ]
})
export class FacultyModule { }
