import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/app/models/professor';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  professor = new Professor();
  msg = "";
  adminEmail = "";
  adminPassword = "";
  
  constructor(private _service : LoginService, private _router : Router) { }

  ngOnInit(): void 
  {
    $(".admin-login-form").hide();
    $(".professor-login-form").hide();
    $("#userbtn").css("border", "0");
    $("#professorbtn").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("border-left", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");;
    $("#adminbtn").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");

    $(".userlogin").click(function(){
      $(".user-login-form").hide();
      $(".admin-login-form").show();
    });

    $("#userbtn").click(function(){
      $(".user-login-form").show();
      $(".admin-login-form").hide();
      $(".professor-login-form").hide();
      $("#userbtn").css("border", "0").css("opacity", "1");
      $("#adminbtn").css("border", "0").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "1").css("opacity", "0.3");
      $("#professorbtn").css("border", "0").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("border-left", "1.5px solid rgb(6, 50, 53)").css("opacity", "1").css("opacity", "0.3");
    });

    $("#professorbtn").click(function(){
      $(".user-login-form").hide();
      $(".admin-login-form").hide();
      $(".professor-login-form").show();
      $("#userbtn").css("border", "0").css("border-right", "1.5px solid rgb(6, 50, 53)").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");
      $("#adminbtn").css("border", "0").css("border-left", "1.5px solid rgb(6, 50, 53)").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");
      $("#professorbtn").css("border", "0").css("opacity", "1");
    });

    $("#adminbtn").click(function(){
      $(".user-login-form").hide();
      $(".admin-login-form").show();
      $(".professor-login-form").hide();
      $("#userbtn").css("border", "0").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");
      $("#adminbtn").css("border", "0").css("opacity", "1");
      $("#professorbtn").css("border", "0").css("border-right", "1.5px solid rgb(6, 50, 53)").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");;
    });
    
    $(".adminlogin").click(function(){
      $(".user-login-form").show();
      $(".admin-login-form").hide();
    });
  }

  loginUser()
  {
      this._service.loginUserFromRemote(this.user).subscribe(
        (data: any) => {
          console.log(data);
          console.log("Response Received");
          sessionStorage.setItem('loggedUser', this.user.email);
          sessionStorage.setItem('USER', "user");
          sessionStorage.setItem('ROLE', "user");
          sessionStorage.setItem('name', this.user.email);
          sessionStorage.setItem('gender', "male");
          this._router.navigate(['/userdashboard']);
        },
        (error: { error: any; }) => {
          console.log(error.error);
          this.msg="Bad credentials, please enter valid credentials !!!";
        }
      )
  }

  loginProfessor()
  {
      this._service.loginProfessorFromRemote(this.professor).subscribe(
        (data: any) => {
          console.log(data);
          console.log("Response Received");
          sessionStorage.clear();
          sessionStorage.setItem('loggedUser', this.professor.email);
          sessionStorage.setItem('USER', "professor");
          sessionStorage.setItem('ROLE', "professor");
          sessionStorage.setItem('professorname',this.professor.email);
          sessionStorage.setItem('gender', "male");
          this._router.navigate(['/professordashboard']);
        },
        (error: { error: any; }) => {
          console.log(error.error);
          this.msg="Bad credentials, please enter valid credentials !!!";
        }
      )
  }

  adminLogin()
  {
    if(this._service.adminLoginFromRemote(this.adminEmail, this.adminPassword)) 
    {
      sessionStorage.setItem('loggedUser', this.adminEmail);
      sessionStorage.setItem('USER', "admin");
      sessionStorage.setItem('ROLE', "admin");
      sessionStorage.setItem('name', "admin");
      sessionStorage.setItem('gender', "male");
      this._router.navigate(['/admindashboard']);
    }
    else 
    {
      console.log("Exception Occured");
      this.msg = 'Bad admin credentials !!!'
    }
  }


}
