import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FacultyRegisterComponent } from './components/faculty-register/faculty-register.component';
import { AdminModule } from './admin/admin.module';
import { CourseFormComponent } from './components/course-form/course-form.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        StudentRegisterComponent,
        FacultyRegisterComponent,
        CourseFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StudentModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
