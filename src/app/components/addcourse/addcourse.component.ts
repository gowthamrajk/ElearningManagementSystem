import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  course = new Course();
  msg = ' ';

  constructor(private _professorService : ProfessorService, private _router : Router) { }

  ngOnInit(): void {
  }

  addCourse()
  {
    this._professorService.addCourse(this.course).subscribe(
      data => {
        console.log("Course added Successfully !!!");
        this._router.navigate(['/addchapter']);
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "Course with "+this.course.coursename+" already exists !!!";
      }
    )
  }

}
