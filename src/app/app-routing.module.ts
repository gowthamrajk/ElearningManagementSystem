import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AddprofessorComponent } from './components/addprofessor/addprofessor.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { FullcourseComponent } from './components/fullcourse/fullcourse.component';
import { LoginComponent } from './components/login/login.component';
import { MycoursesComponent } from './components/mycourses/mycourses.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { ProfessordashboardComponent } from './components/professordashboard/professordashboard.component';
import { ProfessorlistComponent } from './components/professorlist/professorlist.component';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { AdminGuard } from './guards/admin.guard';
import { ProfessorGuard } from './guards/professor.guard';
import { RouterGuard } from './guards/router.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path:'',component:WelcomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'registrationsuccess',component:RegistrationsuccessComponent},
  {path:'admindashboard',component:AdmindashboardComponent,canActivate:[AdminGuard]},
  {path:'userdashboard',component:UserdashboardComponent,canActivate:[UserGuard]},
  {path:'professordashboard',component:ProfessordashboardComponent,canActivate:[ProfessorGuard]},
  {path:'addProfessor',component:AddprofessorComponent,canActivate:[AdminGuard]},
  {path:'addCourse',component:AddcourseComponent,canActivate:[RouterGuard]},
  {path:'approveprofessor',component:ApprovalstatusComponent,canActivate:[RouterGuard]},
  {path:'professorlist',component:ProfessorlistComponent,canActivate:[RouterGuard]},
  {path:'userlist',component:UserlistComponent,canActivate:[RouterGuard]},
  {path:'courselist',component:CourselistComponent,canActivate:[RouterGuard]},
  {path:'addchapter',component:AddchapterComponent,canActivate:[RouterGuard]},
  {path:'fullcourse/:coursename',component:FullcourseComponent,canActivate:[RouterGuard]},
  {path:'editprofessorprofile',component:ProfessorprofileComponent,canActivate:[ProfessorGuard]},
  {path:'edituserprofile',component:UserprofileComponent,canActivate:[UserGuard]},
  {path:'mywishlist',component:MywishlistComponent,canActivate:[RouterGuard]},
  {path:'mycourses',component:MycoursesComponent,canActivate:[RouterGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
