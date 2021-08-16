import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { Enrollment } from 'src/app/models/enrollment';
import { Wishlist } from 'src/app/models/wishlist';
import { ProfessorService } from 'src/app/services/professor.service';
import { UserService } from 'src/app/services/user.service';
declare var $: any;

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})

export class CourselistComponent implements OnInit  {
  
  youtubecourselist : Observable<Course[]> | undefined;
  websitecourselist : Observable<Course[]> | undefined;
  courselist : Observable<Course[]> | undefined;
  enrollmentstatus : Observable<any[]> | undefined;
  wishliststatus : Observable<any[]> | undefined;
  enrollment = new Enrollment();
  wishlist = new Wishlist();

  loggedUser = '';
  currRole = '';
  enrolledID = '';
  enrolledURL = '';
  enrolledName = '';
  enrolledInstructorName = '';
  enrolledStatus : any;
  enrolledStatus2 = '';

  @ViewChild('alertOne') alertOne: ElementRef | undefined;
  
  constructor(private _service : ProfessorService, private userService : UserService, private _router : Router) { }

 ngOnInit() 
 {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.youtubecourselist = this.userService.getYoutubeCourseList();
    this.websitecourselist = this.userService.getWebsiteCourseList();

    const target = 'https://www.youtube.com/iframe_api'

  if (!this.isScriptLoaded(target)) {
    const tag = document.createElement('script')
    tag.src = target
    document.body.appendChild(tag)
  }

  $("#youtubecoursecard").css('display','block');
  $("#websitecoursecard").css('display','block');
  $("#likedbtn").hide();
  $("#enrollsuccess").hide();
  
  $("#youtubecard").click(function(){
    $("#youtubecoursecard").css('display','none');
    $("#websitecoursecard").css('display','none');
    $("#coursedetailscard").show();
  });

  $("#websitecard").click(function(){
    $("#youtubecoursecard").css('display','none');
    $("#websitecoursecard").css('display','none');
    $("#coursedetailscard").show();
  });

 }

 isScriptLoaded(target: string): boolean
{
  return document.querySelector('script[src="' + target + '"]') ? true : false
}

getcoursedetails(coursename : string)
{
  $("#youtubecoursecard").css('display','none');
  $("#websitecoursecard").css('display','none');
  $("#coursedetailscard").show();
  this.courselist = this.userService.getCourseListByName(coursename);
  this.enrollmentstatus = this.userService.getEnrollmentStatus(coursename,this.loggedUser,this.currRole);
  this.wishliststatus = this.userService.getWishlistStatus(coursename,this.loggedUser);
  this.enrollmentstatus.subscribe(val=> { this.enrolledStatus = val});
  if(this.enrolledStatus[0] === "enrolled")
  console.log("yes");
  console.log(this.enrolledStatus[0]);
}

backToCourseList()
{
    $("#youtubecoursecard").css('display','block');
    $("#websitecoursecard").css('display','block');
    $("#coursedetailscard").hide();
}

enrollcourse(course : Course, loggedUser : string, currRole : string)
{
  this.enrollment.courseid = course.courseid;
  this.enrollment.coursename = course.coursename;
  this.enrollment.enrolledusertype = currRole;
  this.enrollment.instructorname = course.instructorname;
  this.enrollment.instructorinstitution = course.instructorinstitution;
  this.enrollment.enrolledcount = course.enrolledcount;
  this.enrollment.youtubeurl = course.youtubeurl;
  this.enrollment.websiteurl = course.websiteurl;
  this.enrollment.coursetype = course.coursetype;
  this.enrollment.skilllevel = course.skilllevel;
  this.enrollment.language = course.language;
  this.enrollment.description = course.description;
  this.enrolledID = course.courseid;
  this.enrolledURL = course.youtubeurl;
  this.enrolledName = course.coursename;
  this.enrolledInstructorName = course.instructorname;
  this.enrolledStatus2 = "enrolled"
  $("#enrollbtn").hide();
  $("#enrolledbtn").show();
  setTimeout(() => {
    $("#youtubecoursecard").css('display','none');
    $("#websitecoursecard").css('display','none');
    $("#coursedetailscard").hide();
    $("#enrollsuccess").show();
  },5000);
  this.userService.enrollNewCourse(this.enrollment,loggedUser,currRole).subscribe(
    data => {
      console.log("Course enrolled Successfully !!!");
    },
    error => {
      console.log("Enrollment Failed !!!");
      console.log(error.error);
    }
  );
}

addToWishList(course : Course, loggedUser : string, currRole : string)
{
  this.wishlist.courseid = course.courseid;
  this.wishlist.coursename = course.coursename;
  this.wishlist.likeduser = loggedUser;
  this.wishlist.likedusertype = currRole;
  this.wishlist.instructorname = course.instructorname;
  this.wishlist.instructorinstitution = course.instructorinstitution;
  this.wishlist.enrolledcount = course.enrolledcount;
  this.wishlist.coursetype = course.coursetype;
  this.wishlist.websiteurl = course.websiteurl;
  this.wishlist.skilllevel = course.skilllevel;
  this.wishlist.language = course.language;
  this.wishlist.description = course.description;
  $("#wishlistbtn").hide();
  $("#likedbtn").css('display','block');
  this.userService.addToWishlist(this.wishlist).subscribe(
    data => {
      console.log("Added To Wishlist Successfully !!!");
    },
    error => {
      console.log("Adding Process Failed !!!");
      console.log(error.error);
    }
  );
}

visitCourse(coursename : string)
{
  if(this.enrolledStatus.slice(0, 1).shift() === "enrolled" || this.enrolledStatus2 === "enrolled")
    this._router.navigate(['/fullcourse', coursename]);
  else if(this.enrolledStatus.slice(0, 1).shift() === "notenrolled")
  {
     $("#alertOne").modal('show');
    //window.alert("You have not Enrolled to the course, Please Enroll it to proceed futher !!!");
  }
    
}
  
gotoURL(url : string)
{
  (window as any).open(url, "_blank");
}

 owlDragging(e: any){
  console.log(e);
}

 owlOptions: OwlOptions = {
   loop: true,
   mouseDrag: true,
   touchDrag: true,
   margin: 50,
   stagePadding: 20,
   pullDrag: true,
   dots: false,
   navSpeed: 1000,
   autoplay: true,
   navText: ['Previous', 'Next'],
   responsive: {
     0: {
       items: 1 
     },
     400: {
       items: 2
     },
     767: {
       items: 2
     },
     1024: {
       items: 3
     }
   },
   nav: true
 }

}
