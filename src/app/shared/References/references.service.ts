import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { References } from './references.model';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  selectedreference:References; //to be used for insert, update and delete operation
  referencesList:References[]; //for obtaining a list
  readonly baseURL='http://localhost:3000/references';

  constructor(private http:HttpClient) {  }

  addReferences(ref:References)
  {
    return this.http.post(this.baseURL,ref);
  }
  getReferences(_id:string)
  {
    return this.http.get(this.baseURL+`/${_id}`);
  }
  putReferences(ref:References)
  {
    return this.http.put(this.baseURL+`/${ref._id}`,ref);
  }
}
