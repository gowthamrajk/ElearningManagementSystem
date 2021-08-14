import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'  
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/models/chapter';
import { ProfessorService } from 'src/app/services/professor.service';
import * as $ from 'jquery';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-addchapter',
  templateUrl: './addchapter.component.html',
  styleUrls: ['./addchapter.component.css']
})
export class AddchapterComponent implements OnInit {

  chapter = new Chapter();
  coursenames : Observable<Course[]> | undefined;
     
  constructor(private _router : Router, private _service : ProfessorService) {}  
    
  ngOnInit() {

    this.coursenames = this._service.getCourseListNames();

    $("#chapter2btn,#chapter3btn,#chapter4btn,#chapter5btn,#chapter6btn,#chapter7btn,#chapter8btn").hide();
    $("#chapter2,#chapter3,#chapter4,#chapter5,#chapter6,#chapter7,#chapter8").hide();

    $("#chapter1btn").click(function(){
      $("#chapter2,#chapter2btn").show();
      $("#chapter1btn").hide();
    });
    $("#chapter2btn").click(function(){
      $("#chapter3,#chapter3btn").show();
      $("#chapter1btn,#chapter2btn,#remove2btn").hide();
    });
    $("#chapter3btn").click(function(){
      $("#chapter4,#chapter4btn").show();
      $("#chapter1btn,#chapter2btn,#chapter3btn,#remove2btn,#remove3btn").hide();
    });
    $("#chapter4btn").click(function(){
      $("#chapter5,#chapter5btn").show();
      $("#chapter1btn,#chapter2btn,#chapter3btn,#chapter4btn,#remove2btn,#remove3btn,#remove4btn").hide();
    });
    $("#chapter5btn").click(function(){
      $("#chapter6,#chapter6btn").show();
      $("#chapter1btn,#chapter2btn,#chapter3btn,#chapter4btn,#chapter5btn,#remove2btn,#remove3btn,#remove4btn,#remove5btn").hide();
    });
    $("#chapter6btn").click(function(){
      $("#chapter7,#chapter7btn").show();
      $("#chapter1btn,#chapter2btn,#chapter3btn,#chapter4btn,#chapter5btn,#chapter6btn,#remove2btn,#remove3btn,#remove4btn,#remove5btn,#remove6btn").hide();
    });
    $("#chapter7btn").click(function(){
      $("#chapter8,#chapter8btn").show();
      $("#chapter1btn,#chapter2btn,#chapter3btn,#chapter4btn,#chapter5btn,#chapter6btn,#chapter7btn,#remove2btn,#remove3btn,#remove4btn,#remove5btn,#remove6btn,#remove7btn").hide();
    });

    $("#remove2btn").click(function(){
      $("#chapter2").hide();
      $('#chapter2nametxt, #chapter2idtxt').val('');
      $("#chapter1btn").show();
    });
    $("#remove3btn").click(function(){
      $("#chapter3").hide();
      $('#chapter3nametxt, #chapter3idtxt').val('');
      $("#chapter2btn,#remove2btn").show();
    });
    $("#remove4btn").click(function(){
      $("#chapter4").hide();
      $('#chapter4nametxt, #chapter4idtxt').val('');
      $("#chapter3btn,#remove3btn").show();
    });
    $("#remove5btn").click(function(){
      $("#chapter5").hide();
      $('#chapter5nametxt, #chapter5idtxt').val('');
      $("#chapter4btn,#remove4btn").show();
    });
    $("#remove6btn").click(function(){
      $("#chapter6").hide();
      $('#chapter6nametxt, #chapter6idtxt').val('');
      $("#chapter5btn,#remove5btn").show();
    });
    $("#remove7btn").click(function(){
      $("#chapter7").hide();
      $('#chapter7nametxt, #chapter7idtxt').val('');
      $("#chapter6btn,#remove6btn").show();
    });
    $("#remove8btn").click(function(){
      $("#chapter8").hide();
      $('#chapter8nametxt, #chapter8idtxt').val('');
      $("#chapter7btn,#remove7btn").show();
    });
    
  }

  addChapters()
  {
    this._service.addNewChapters(this.chapter).subscribe(
      data => {
        console.log("chapter added Successfully !!!");
        this._router.navigate(['/professordashboard']);
      },
      error => {
        console.log("chapter adding Failed !!!");
        console.log(error.error);
      }
    )
  }

}
