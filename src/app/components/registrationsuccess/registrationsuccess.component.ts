import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationsuccess',
  templateUrl: './registrationsuccess.component.html',
  styleUrls: ['./registrationsuccess.component.css']
})
export class RegistrationsuccessComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void 
  {
    setTimeout(() => {
      this.router.navigate(['login']);
  }, 7000);
  }

}
