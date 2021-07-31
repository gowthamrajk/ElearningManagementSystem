import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private _router : Router) { }

  ngOnInit(): void 
  {
    
  }

  navigate()
  {
    this._router.navigate(['/login']);
  }

}
