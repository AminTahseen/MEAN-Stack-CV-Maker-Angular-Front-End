import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  public isloggedin : boolean;

  constructor() { 
    this.isloggedin=false;
  }

  update_state(user)
  {
    sessionStorage.setItem("loggedIn",JSON.stringify(user));
  }
  getCurrent_state()
  {
    return sessionStorage.getItem("loggedIn");
  }
}
