import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private _router : Router) { }

  ngOnInit(): void 
  {
    $("#subtext1").click(function(){
      $("#innertext1").slideToggle(300);
      if($('#innertext2').is(':visible')||$('#innertext3').is(':visible')||$('#innertext4').is(':visible'))
      {
        $('#innertext2').slideUp(300);
        $('#innertext3').slideUp(300);
        $('#innertext4').slideUp(300);
      }
  });
  $("#subtext2").click(function(){
      $("#innertext2").slideToggle(300);
      if($('#innertext1').is(':visible')||$('#innertext3').is(':visible')||$('#innertext4').is(':visible'))
      {
        $('#innertext1').slideUp(300);
        $('#innertext3').slideUp(300);
        $('#innertext4').slideUp(300);
      }
  });
  $("#subtext3").click(function(){
      $("#innertext3").slideToggle(300);
      if($('#innertext1').is(':visible')||$('#innertext2').is(':visible')||$('#innertext4').is(':visible'))
      {
        $('#innertext1').slideUp(300);
        $('#innertext2').slideUp(300);
        $('#innertext4').slideUp(300);
      }
  });
  $("#subtext4").click(function(){
      $("#innertext4").slideToggle(300);
      if($('#innertext1').is(':visible')||$('#innertext2').is(':visible')||$('#innertext3').is(':visible'))
      {
        $('#innertext1').slideUp(300);
        $('#innertext2').slideUp(300);
        $('#innertext3').slideUp(300);
      }
  }); 
  }

  navigate()
  {
    this._router.navigate(['/login']);
  }

}
