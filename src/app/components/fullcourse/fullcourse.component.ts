import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/models/chapter';
import { UserService } from 'src/app/services/user.service';
import * as $ from 'jquery';
import { Course } from 'src/app/models/course';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-fullcourse',
  templateUrl: './fullcourse.component.html',
  styleUrls: ['./fullcourse.component.css']
})
export class FullcourseComponent implements OnInit {

  video = 'Ejzi8XbNbcY';
  courseName = 'springboot';
  chapterlist : Observable<Chapter[]> | undefined;
  courselist : Observable<Course[]> | undefined;
  chapter = new Chapter();

  constructor(private _router : Router, private _service : UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    $("#overview").show();
    $("#qa, #notes, #announcements, #questions, #notestxt, #downloads").hide();
    $("#downloadalert").css("display","none");
    this.courseName = this.activatedRoute.snapshot.params['coursename'];

    const target = 'https://www.youtube.com/iframe_api'

    if (!this.isScriptLoaded(target)) {
      const tag = document.createElement('script')
      tag.src = target
      document.body.appendChild(tag)
    }

    this.chapterlist = this._service.getChappterListByCourseName(this.courseName);
    this.courselist = this._service.getCourseListByName(this.courseName);

  }

  openOverview()
  {
    $("#overview").show();
    $("#qa,#announcements,#notes,#downloads").hide();
    $("#downloadalert").css("display","none");
  }
  openQandA()
  {
    $("#qa").show();
    $("#overview,#announcements,#notes,#downloads").hide();
    $("#downloadalert").css("display","none");
  }
  openNotes()
  {
    $("#notes").show();
    $("#overview,#announcements,#qa,#downloads").hide();
    $("#downloadalert").css("display","none");
  }
  openAnnouncements()
  {
    $("#announcements").show();
    $("#overview,#qa,#notes,#downloads").hide();
    $("#downloadalert").css("display","none");
  }
  openDownloads()
  {
    $("#downloads").show();
    $("#overview,#qa,#notes,#announcements").hide();
    $("#downloadalert").css("display","block");
  }
  newQuestion()
  {
    $("#questions").toggle();
  }
  newNotes()
  {
    $("#notestxt").toggle();
  }

  set1()
  {
    $(".box1").css("background-color","green");
    $(".chapter1").addClass("selected");
    $(".box2,.box3,.box4,.box5,.box6,.box7,.box8").css("background-color","white");
    $(".chapter2,.chapter3,.chapter4,.chapter5,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set2()
  {
    $(".box2").css("background-color","green");
    $(".chapter2").addClass("selected");
    $(".box1,.box3,.box4,.box5,.box6,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter3,.chapter4,.chapter5,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set3()
  {
    $(".box3").css("background-color","green");
    $(".chapter3").addClass("selected");
    $(".box1,.box2,.box4,.box5,.box6,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter4,.chapter5,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set4()
  {
    $(".box4").css("background-color","green");
    $(".chapter4").addClass("selected");
    $(".box1,.box2,.box3,.box5,.box6,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter5,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set5()
  {
    $(".box5").css("background-color","green");
    $(".chapter5").addClass("selected");
    $(".box1,.box2,.box3,.box4,.box6,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter4,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set6()
  {
    $(".box6").css("background-color","green");
    $(".chapter6").addClass("selected");
    $(".box1,.box2,.box3,.box4,.box5,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter4,.chapter5,.chapter7,.chapter8").removeClass("selected");
  }
  set7()
  {
    $(".box7").css("background-color","green");
    $(".chapter7").addClass("selected");
    $(".box1,.box2,.box3,.box4,.box5,.box6,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter4,.chapter5,.chapter6,.chapter8").removeClass("selected");
  }
  set8()
  {
    $(".box8").css("background-color","green");
    $(".chapter8").addClass("selected");
    $(".box1,.box2,.box3,.box4,.box5,.box6,.box7").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter4,.chapter5,.chapter6,.chapter7").removeClass("selected");
  }

  openChapter(chapterid : string)
  {
    this.video = chapterid;
  }

  isScriptLoaded(target: string): boolean
  {
    return document.querySelector('script[src="' + target + '"]') ? true : false
  }

  downloadPdf() {
    const pdfUrl = './assets/Introduction to Spring MVC.pdf';
    const pdfName = 'Introduction to Spring MVC';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  openDoc() {
    const pdfUrl = './assets/Introduction to Spring MVC.pdf';
    window.open(pdfUrl + '#page=1', '_blank', '', true);
  }

}
