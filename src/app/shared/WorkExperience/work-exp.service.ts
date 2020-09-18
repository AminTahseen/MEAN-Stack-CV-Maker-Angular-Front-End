import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { WorkExp } from './work-exp.model';


@Injectable({
  providedIn: 'root'
})
export class WorkExpService {
  selectedWorkexp:WorkExp; //to be used for insert, update and delete operation
  expList:WorkExp[]; //for obtaining a list
  readonly baseURL='http://localhost:3000/workExp';

  constructor(private http:HttpClient) {  }

  addWorkExperience(workexp:WorkExp)
  {
    return this.http.post(this.baseURL, workexp);
  }
  getExperiences(_id:string){
    return this.http.get(this.baseURL+`/${_id}`);
  }
  putExperiences(exp:WorkExp){
    return this.http.put(this.baseURL+`/${exp._id}`,exp);
  }
}
