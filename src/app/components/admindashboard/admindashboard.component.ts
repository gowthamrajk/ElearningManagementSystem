import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  name = 'admin';
  gender = '';
  loggedUser = '';
  currRole = '';
  professors : Observable<any[]> | undefined;
  users : Observable<any[]> | undefined;
  courses : Observable<any[]> | undefined;
  enrollments : Observable<any[]> | undefined;
  enrollmentcount : Observable<any[]> | undefined;
  wishlist : Observable<any[]> | undefined;
  chapters : Observable<any[]> | undefined;

  constructor(private _route : Router, private _service : AdminService) { }

  ngOnInit(): void
  {
    this.name = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}');
    this.name = this.name.replace(/"/g, '');

    this.gender = JSON.stringify(sessionStorage.getItem('gender')|| '{}');
    this.gender = this.gender.replace(/"/g, '');

    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.professors = this._service.getTotalProfessors();
    this.users = this._service.getTotalUsers();
    this.courses = this._service.getTotalCourses();
    this.enrollments = this._service.getTotalEnrollments();
    this.enrollmentcount = this._service.getTotalEnrollmentCount();
    this.wishlist = this._service.getTotalWishlist();
    this.chapters = this._service.getTotalChapters();

  }

}
