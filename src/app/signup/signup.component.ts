import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../shared/Users/user.service';
import {User} from '../shared/Users/user.model';

declare var M:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService],
})
export class SignupComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm)
  {
    if(form)
      form.reset();
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

  onSubmit(form:NgForm){
 
    this.userService.signUpUser(form.value).subscribe((res)=>{
      this.resetForm(form);  
      M.toast({html:'Account Created Successfully', classes:'rounded'});      
    });
  
}


}
