import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/Users/user.service';
import {User} from '../shared/Users/user.model';
import {NgForm} from '@angular/forms';

declare var M:any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.getCurrentUserData();
  }

  getCurrentUserData(){
    this.refreshData();
    this.userService.getUserDetails(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe(
      (response)=>
      {
        var res = JSON.stringify(response);
        let myObj = JSON.parse(res);
        this.userService.selectedUser={
          _id:myObj._id,
          username:myObj.username,
          user_password:myObj.user_password,
          user_name:myObj.user_name,
          gender:myObj.gender,
          dateOfBirth:myObj.dateOfBirth,
          email:myObj.email,
          contact_number:myObj.contact_number,
        }
      });
  }
  refreshData()
  {
    this.userService.selectedUser={
      _id:"",
      username:"",
      user_password:"",
      user_name:"",
      gender:"",
      dateOfBirth:"",
      email:"",
      contact_number:"",
    }
  }

  updateData(form:NgForm)
  {
    this.userService.putUser(form.value).subscribe((res)=>{
      M.toast({html:'Profile Updated Successfully', classes:'rounded'});
    });
  }
}
