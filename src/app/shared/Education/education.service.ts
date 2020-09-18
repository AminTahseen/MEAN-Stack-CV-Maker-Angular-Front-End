import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { Education } from './education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  selectedEducation: Education; //to be used for insert, update and delete operation
  educations: Education[]; //for obtaining a list
  readonly baseURL = 'http://localhost:3000/edu';
  readonly getEduURL = 'http://localhost:3000/edu/listEducations';

  constructor(private http: HttpClient) {}

  postEducation(edu: Education) {
    return this.http.post(this.baseURL, edu);
  }

  getEducations(_id: string) {
    return this.http.get(this.getEduURL + `/${_id}`);
  }

  putEducations(edu: Education) {
    return this.http.put(this.baseURL + `/${edu._id}`, edu);
  }
}
