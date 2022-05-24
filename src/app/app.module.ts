import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FacultyRegisterComponent } from './components/faculty-register/faculty-register.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        StudentRegisterComponent,
        FacultyRegisterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StudentModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
