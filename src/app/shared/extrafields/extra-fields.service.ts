import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { ExtraFields } from './extra-fields.model';

@Injectable({
  providedIn: 'root'
})
export class ExtraFieldsService {
  selectedrextraFields:ExtraFields; //to be used for insert, update and delete operation
  extraFieldsList:ExtraFields[]; //for obtaining a list
  readonly baseURL='http://localhost:3000/extraFields';

  constructor(private http:HttpClient) {  }

  addExtraFields(obj:ExtraFields)
  {
    return this.http.post(this.baseURL,obj);
  }
  getExtraFields(_id:string)
  {
    return this.http.get(this.baseURL+`/${_id}`);
  }
  putExtraFields(obj:ExtraFields)
  {
    return this.http.put(this.baseURL+`/${obj._id}`,obj);
  }
}
