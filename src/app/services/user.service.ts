import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';
import { Enrollment } from '../models/enrollment';
import { Wishlist } from '../models/wishlist';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  getAllUsers() : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/userlist`);
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

  enrollNewCourse(enrollment : Enrollment, loggedUser : string, currRole : string) : Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/enrollnewcourse/`+loggedUser+"/"+currRole,enrollment);
  }

  addToWishlist(wishlist : Wishlist) : Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/addtowishlist`,wishlist);
  }

  getEnrollmentStatus(coursename : string, loggedUser : string, currRole : string) : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/getenrollmentstatus/`+coursename+"/"+loggedUser+"/"+currRole);
  }

  getEnrollmentByEmail(loggedUser : string, currRole : string) : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/getenrollmentbyemail/`+loggedUser+"/"+currRole);
  }

  getWishlistStatus(coursename : string, loggedUser : string) : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/getwishliststatus/`+coursename+"/"+loggedUser);
  }

  getWishlistByEmail(loggedUser : string) : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/getwishlistbyemail/`+loggedUser);
  }

  getAllWishlist() : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/getallwishlist`);
  }

  getChappterListByCourseName(coursename : string) : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/getchapterlistbycoursename/`+coursename);
  }

  getProfileDetails(loggedUser : string) : Observable<any>
  {
    return this._http.get(`${NAV_URL}/userprofileDetails/`+loggedUser);
  }
  
  UpdateUserProfile(user : any):Observable<any>
  {
    return this._http.put<any>(`${NAV_URL}/updateuser`,user);
  }

}
