import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Wishlist } from 'src/app/models/wishlist';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent implements OnInit {

  wishlist : Observable<Wishlist[]> | undefined;
  loggedUser = '';
  currRole = '';
  constructor(private _service : UserService, private _router : Router) { }

  ngOnInit(): void
  {
    
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    if(this.currRole === "admin")
      this.wishlist = this._service.getAllWishlist();
    else
      this.wishlist = this._service.getWishlistByEmail(this.loggedUser);
  }

  visitCourse(coursename : string)
  {
    this._router.navigate(['/fullcourse', coursename]);
  }
  
  openURL(url : string)
  {
    (window as any).open(url, "_blank");
  }

}
