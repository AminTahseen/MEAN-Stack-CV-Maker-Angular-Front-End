import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { ResearchExp } from './research-exp.model';

@Injectable({
  providedIn: 'root'
})
export class ResearchExpService {
  selectedResearchexp:ResearchExp; //to be used for insert, update and delete operation
  expList:ResearchExp[]; //for obtaining a list
  readonly baseURL='http://localhost:3000/researchExp';

  constructor(private http:HttpClient) {  }

  addExperience(exp:ResearchExp)
  {
    return this.http.post(this.baseURL, exp);
  }
  getExperiences(_id:string){
    return this.http.get(this.baseURL+`/${_id}`);
  }
  putExperiences(exp:ResearchExp){
    return this.http.put(this.baseURL+`/${exp._id}`,exp);
  }
}
