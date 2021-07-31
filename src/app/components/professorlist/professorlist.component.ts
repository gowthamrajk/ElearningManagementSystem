import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professorlist',
  templateUrl: './professorlist.component.html',
  styleUrls: ['./professorlist.component.css']
})
export class ProfessorlistComponent implements OnInit {

  loggedUser = '';
  currRole = '';
  professorlist : Observable<Professor[]> | undefined;
  
  constructor(private _service : ProfessorService) { }

  ngOnInit(): void 
  {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.professorlist = this._service.getProfessorList();
  }

}
