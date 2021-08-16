import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chapter } from '../models/chapter';
import { Course } from '../models/course';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ProfessorService 
{
  constructor(private _http : HttpClient) { }

  acceptRequestForProfessorApproval(curremail: string): Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/acceptstatus/`+curremail);
  }
  
  rejectRequestForProfessorApproval(curremail: string): Observable<any> 
  {
    return this._http.get<any>(`${NAV_URL}/rejectstatus/`+curremail);
  }
  
  getProfessorList() : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/professorlist`);
  }

  getYoutubeCourseList() : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/youtubecourselist`);
  }

  getWebsiteCourseList() : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/websitecourselist`);
  }

  getCourseListByName(coursename : string) : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/courselistbyname/`+coursename);
  }

  addCourse(course : Course) : Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/addCourse`,course);
  }

  getProfessorListByEmail(email : string) : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/professorlistbyemail/`+email);
  }

  addNewChapters(chapter : Chapter) : Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/addnewchapter`,chapter);
  }

  getProfileDetails(loggedUser : string) : Observable<any>
  {
    return this._http.get(`${NAV_URL}/professorprofileDetails/`+loggedUser);
  }
  
  UpdateUserProfile(professor : any):Observable<any>
  {
    return this._http.put<any>(`${NAV_URL}/updateprofessor`,professor);
  }
  
  getCourseListNames() : Observable<any>
  {
    return this._http.get(`${NAV_URL}/getcoursenames/`);
  }
  
}
