import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import {User} from '../Users/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User; //to be used for insert, update and delete operation
  users:User[]; //for obtaining a list of employees
  readonly baseURL='http://localhost:3000/users';
  readonly LoginbaseURL='http://localhost:3000/users/verifyLogin';
  readonly findbyId='http://localhost:3000/users/getUserDetails'
  readonly updateUser='http://localhost:3000/users/SavechangesProfile'

  constructor(private http:HttpClient) {  }

  signUpUser(user:User)
  {
    return this.http.post(this.baseURL, user);
  }

  signInUser(username:string,user_password:string)
  {  
    return this.http.post(this.LoginbaseURL, { username: username, user_password: user_password });
  }
  
  getUserDetails(_id:string)
  {
    return this.http.get(this.findbyId+`/${_id}`);
  }

  putUser(user:User)
  {
    return this.http.put(this.updateUser+`/${user._id}`,user);
  }
  
}
