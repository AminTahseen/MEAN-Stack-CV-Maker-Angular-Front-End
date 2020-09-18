import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/Users/user.service'
import {User} from '../shared/Users/user.model';
import { Router } from '@angular/router';
import {UserStateService} from '../shared/Additional/user-state.service'

declare var M:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService],
})
export class LoginComponent implements OnInit {

  showNav = true;
  username: string; 
  user_password: string;
  constructor(
    public userServices:UserService,
    private router: Router,
    public ustateservice:UserStateService
    ) 
    { }

  ngOnInit(): void {
    
  }

  onLogin()
  {
      this.userServices.signInUser(this.username,this.user_password).subscribe(
      (res)=>
      {
        console.log(res);
        if(JSON.stringify(res)==='User Not found')
        {
          M.toast({html:'Failed to login !', classes:'rounded'});      
        }else
        {
          this.ustateservice.update_state(res);
          M.toast({html:'Successfully Logged In ', classes:'rounded'});  
          this.router.navigate(['/userProfile']);    
        }
      },
      (err)=>{
        console.log(err);
      });
   
   
  }

  
}
