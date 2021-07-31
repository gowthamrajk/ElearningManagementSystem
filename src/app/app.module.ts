import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { ProfessordashboardComponent } from './components/professordashboard/professordashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';
import { AddprofessorComponent } from './components/addprofessor/addprofessor.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ProfessorlistComponent } from './components/professorlist/professorlist.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FullcourseComponent } from './components/fullcourse/fullcourse.component';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { MycoursesComponent } from './components/mycourses/mycourses.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationsuccessComponent,
    UserdashboardComponent,
    ProfessordashboardComponent,
    AdmindashboardComponent,
    HeaderComponent,
    FooterComponent,
    UserprofileComponent,
    ProfessorprofileComponent,
    AddprofessorComponent,
    ApprovalstatusComponent,
    AddcourseComponent,
    UserlistComponent,
    ProfessorlistComponent,
    CourselistComponent,
    FullcourseComponent,
    AddchapterComponent,
    MycoursesComponent,
    MywishlistComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    YouTubePlayerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, RegistrationComponent]
})
export class AppModule { }
